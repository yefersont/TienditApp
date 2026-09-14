import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) { }

  async findBySucursal(sucursalId: string) {
    const inventarios = await this.prisma.inventario.findMany({
      where: {
        sucursalId,
        producto: {
          activo: true,
        },
      },
      include: {
        producto: true,
      },
      orderBy: {
        producto: {
          nombre: 'asc',
        },
      },
    });

    return inventarios.map((inventario) => ({
      id: inventario.producto.id,
      nombre: inventario.producto.nombre,
      descripcion: inventario.producto.descripcion,
      precioCompra: inventario.producto.precioCompra,
      precioVenta: inventario.producto.precioVenta,
      stock: inventario.cantidad,
      stockMinimo: inventario.producto.stockMinimo,
    }));
  }

  async actualizarPrecio(data: {
    sucursalId: string;
    productoId: string;
    precioCompra?: number;
    precioVenta?: number;
    usuarioId: string;
  }) {
    return this.prisma.$transaction(async (tx) => {
      const producto = await tx.producto.findUnique({
        where: {
          id: data.productoId,
        },
      });

      if (!producto) {
        throw new BadRequestException(
          'El producto no existe',
        );
      }

      if (
        data.precioCompra === undefined &&
        data.precioVenta === undefined
      ) {
        throw new BadRequestException(
          'Debe enviar al menos un precio para actualizar',
        );
      }

      const cambios: string[] = [];

      if (
        data.precioCompra !== undefined &&
        !producto.precioCompra.equals(data.precioCompra)
      ) {
        cambios.push(
          `Precio compra: ${producto.precioCompra} → ${data.precioCompra}`,
        );
      }

      if (
        data.precioVenta !== undefined &&
        !producto.precioVenta.equals(data.precioVenta)
      ) {
        cambios.push(
          `Precio venta: ${producto.precioVenta} → ${data.precioVenta}`,
        );
      }

      if (cambios.length === 0) {
        return producto;
      }

      const productoActualizado = await tx.producto.update({
        where: {
          id: data.productoId,
        },
        data: {
          ...(data.precioCompra !== undefined && {
            precioCompra: data.precioCompra,
          }),
          ...(data.precioVenta !== undefined && {
            precioVenta: data.precioVenta,
          }),
        },
      });

      await tx.movimientoInventario.create({
        data: {
          sucursal: {
            connect: {
              id: data.sucursalId,
            },
          },
          producto: {
            connect: {
              id: data.productoId,
            },
          },
          usuario: {
            connect: {
              id: data.usuarioId,
            },
          },
          tipo: 'AJUSTE',
          cantidad: 0,
          observacion: cambios.join(' | '),
        },
      });

      return productoActualizado;
    });
  }

}