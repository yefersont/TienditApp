import { Injectable } from '@nestjs/common';
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
}