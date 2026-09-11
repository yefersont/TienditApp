import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventarioService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: {
    sucursalId: string;
    nombre: string;
    descripcion?: string;
    codigoBarras?: string;
    categoriaId: string;
    precioCompra: number;
    precioVenta: number;
    stockMinimo?: number;
    cantidad?: number;
    usuarioId: string;
  }) {
    return this.prisma.$transaction(async (tx) => {
      let producto = await tx.producto.findFirst({
        where: {
          nombre: data.nombre,
          activo: true,
        },
      });

      if (!producto) {
        producto = await tx.producto.create({
          data: {
            nombre: data.nombre,
            descripcion: data.descripcion,
            codigoBarras: data.codigoBarras,
            categoriaId: data.categoriaId,
            precioCompra: data.precioCompra,
            precioVenta: data.precioVenta,
            stockMinimo: data.stockMinimo ?? 0,
          },
        });
      }

      const inventarioExistente = await tx.inventario.findUnique({
        where: {
          sucursalId_productoId: {
            sucursalId: data.sucursalId,
            productoId: producto.id,
          },
        },
      });

      if (inventarioExistente) {
        throw new BadRequestException(
          'Este producto ya existe en el inventario de esta sucursal',
        );
      }

      const cantidadInicial = data.cantidad ?? 0;

      const inventario = await tx.inventario.create({
        data: {
          sucursalId: data.sucursalId,
          productoId: producto.id,
          cantidad: cantidadInicial,
        },
        include: {
          producto: true,
          sucursal: true,
        },
      });

      if (cantidadInicial > 0) {
        await tx.movimientoInventario.create({
          data: {
            sucursalId: data.sucursalId,
            productoId: producto.id,
            usuarioId: data.usuarioId,
            tipo: 'ENTRADA',
            cantidad: cantidadInicial,
            costoUnitario: data.precioCompra,
            observacion: `Ingreso inicial de ${cantidadInicial} unidades`,
          },
        });
      }

      return inventario;
    });
  }

  async findAll() {
    return this.prisma.inventario.findMany({
      include: {
        producto: true,
        sucursal: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.inventario.findUnique({
      where: { id },
      include: {
        producto: true,
        sucursal: true,
      },
    });
  }

  async actualizarStock(
    sucursalId: string,
    productoId: string,
    cantidad: number,
    usuarioId: string,
  ) {
    if (cantidad < 0) {
      throw new BadRequestException(
        'La cantidad no puede ser negativa',
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const inventario = await tx.inventario.findUnique({
        where: {
          sucursalId_productoId: {
            sucursalId,
            productoId,
          },
        },
      });

      if (!inventario) {
        throw new BadRequestException(
          'El producto no existe en el inventario de esta sucursal',
        );
      }

      const diferencia = cantidad - inventario.cantidad;

      const inventarioActualizado = await tx.inventario.update({
        where: {
          id: inventario.id,
        },
        data: {
          cantidad,
        },
      });

      if (diferencia !== 0) {
        await tx.movimientoInventario.create({
          data: {
            sucursalId,
            productoId,
            usuarioId,
            tipo: 'AJUSTE',
            cantidad: diferencia,
            observacion: `Ajuste de stock: ${inventario.cantidad} → ${cantidad}`,
          },
        });
      }

      return inventarioActualizado;
    });
  }

  async obtenerHistorial() {
    return this.prisma.movimientoInventario.findMany({
      include: {
        producto: {
          select: {
            id: true,
            nombre: true,
          },
        },
        sucursal: {
          select: {
            id: true,
            nombre: true,
          },
        },
        usuario: {
          select: {
            id: true,
            nombre: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async remove(id: string) {
    return this.prisma.inventario.delete({
      where: { id },
    });
  }
}