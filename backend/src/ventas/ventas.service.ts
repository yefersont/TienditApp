import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VentasService {
    constructor(private readonly prisma: PrismaService) { }

    async registrarVenta(data: {
        sucursalId: string;
        items: {
            productoId: string;
            cantidad: number;
            precioUnitario: number;
        }[];
    }) {
        return this.prisma.$transaction(async (tx) => {
            const resultados: {
                producto: string;
                cantidadVendida: number;
                stockRestante: number;
                precioUnitario: number;
                totalVenta: number;
                utilidad: number;
                movimientoId: string;
            }[] = [];

            for (const item of data.items) {
                // Buscar el inventario del producto en la sucursal
                const inventario = await tx.inventario.findUnique({
                    where: {
                        sucursalId_productoId: {
                            sucursalId: data.sucursalId,
                            productoId: item.productoId,
                        },
                    },
                    include: {
                        producto: true,
                    },
                });

                if (!inventario) {
                    throw new BadRequestException(
                        `El producto ${item.productoId} no existe en el inventario de esta sucursal`,
                    );
                }

                // Verificar stock
                if (inventario.cantidad < item.cantidad) {
                    throw new BadRequestException(
                        `Stock insuficiente para ${inventario.producto.nombre}. Stock disponible: ${inventario.cantidad}`,
                    );
                }

                // Precio de compra real desde la BD
                const costoUnitario = Number(inventario.producto.precioCompra);

                // Calcular valores
                const totalVenta = item.cantidad * item.precioUnitario;

                const utilidad =
                    (item.precioUnitario - costoUnitario) * item.cantidad;

                // Descontar inventario
                const inventarioActualizado = await tx.inventario.update({
                    where: {
                        id: inventario.id,
                    },
                    data: {
                        cantidad: {
                            decrement: item.cantidad,
                        },
                    },
                    include: {
                        producto: true,
                        sucursal: true,
                    },
                });

                // Registrar movimiento
                const movimiento = await tx.movimientoInventario.create({
                    data: {
                        sucursalId: data.sucursalId,
                        productoId: item.productoId,

                        // Temporalmente usamos un usuario fijo
                        // mientras definimos autenticación
                        usuarioId: '2b442072-01ac-4b20-b1e1-becdc06ab2a9',

                        tipo: 'SALIDA',
                        cantidad: item.cantidad,

                        precioUnitario: item.precioUnitario,
                        costoUnitario,

                        totalVenta,
                        utilidad,

                        observacion: 'Venta',
                    },
                });

                resultados.push({
                    producto: inventario.producto.nombre,
                    cantidadVendida: item.cantidad,
                    stockRestante: inventarioActualizado.cantidad,
                    precioUnitario: item.precioUnitario,
                    totalVenta,
                    utilidad,
                    movimientoId: movimiento.id,
                });
            }

            return {
                mensaje: 'Venta registrada correctamente',
                sucursalId: data.sucursalId,
                items: resultados,
            };
        });
    }
}