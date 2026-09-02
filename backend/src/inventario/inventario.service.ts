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
  }) {
    return this.prisma.$transaction(async (tx) => {
      // 1. Buscar si el producto ya existe
      let producto = await tx.producto.findFirst({
        where: {
          nombre: data.nombre,
          activo: true,
        },
      });

      // 2. Si no existe, crearlo
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

      // 3. Verificar si ya está en esa sucursal
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

      // 4. Crear el inventario en la sucursal
      const inventario = await tx.inventario.create({
        data: {
          sucursalId: data.sucursalId,
          productoId: producto.id,
          cantidad: data.cantidad ?? 0,
        },
        include: {
          producto: true,
          sucursal: true,
        },
      });

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

  async remove(id: string) {
    return this.prisma.inventario.delete({
      where: { id },
    });
  }
}