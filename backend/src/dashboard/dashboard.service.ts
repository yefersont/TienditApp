import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DashboardService {
    constructor(private readonly prisma: PrismaService) { }

    async obtenerDashboard(sucursalId: string) {
        const ahora = new Date();

        // Primer día del mes actual
        const inicioPeriodo = new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            1,
            0,
            0,
            0,
            0,
        );

        // Primer día del siguiente mes
        const finPeriodo = new Date(
            ahora.getFullYear(),
            ahora.getMonth() + 1,
            1,
            0,
            0,
            0,
            0,
        );

        // =========================
        // MOVIMIENTOS DEL PERÍODO
        // =========================

        const movimientosPeriodo =
            await this.prisma.movimientoInventario.findMany({
                where: {
                    sucursalId,
                    createdAt: {
                        gte: inicioPeriodo,
                        lt: finPeriodo,
                    },
                },
                select: {
                    tipo: true,
                    cantidad: true,
                    totalVenta: true,
                    utilidad: true,
                },
            });

        // =========================
        // VENTAS Y UTILIDAD
        // =========================

        let ventas = 0;
        let utilidad = 0;

        for (const movimiento of movimientosPeriodo) {
            if (movimiento.tipo === 'SALIDA') {
                ventas += Number(movimiento.totalVenta ?? 0);
                utilidad += Number(movimiento.utilidad ?? 0);
            }
        }

        // =========================
        // STOCK BAJO
        // =========================

        const inventarios = await this.prisma.inventario.findMany({
            where: {
                sucursalId,
                producto: {
                    activo: true,
                },
            },
            include: {
                producto: {
                    select: {
                        id: true,
                        nombre: true,
                        stockMinimo: true,
                    },
                },
            },
        });

        const stockBajo = inventarios
            .filter(
                (item) =>
                    item.cantidad <= item.producto.stockMinimo,
            )
            .sort(
                (a, b) =>
                    a.cantidad - b.cantidad,
            );

        // =========================
        // MOVIMIENTOS RECIENTES
        // =========================

        const movimientosRecientes =
            await this.prisma.movimientoInventario.findMany({
                where: {
                    sucursalId,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                take: 5,
                include: {
                    producto: {
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
            });

        // =========================
        // RESPUESTA
        // =========================

        return {
            resumen: {
                ventas,
                utilidad,
                movimientos: movimientosPeriodo.length,
            },

            stockBajo: stockBajo.map((item) => ({
                id: item.id,
                productoId: item.producto.id,
                nombre: item.producto.nombre,
                cantidad: item.cantidad,
                stockMinimo: item.producto.stockMinimo,
            })),

            movimientosRecientes: movimientosRecientes.map(
                (movimiento) => ({
                    id: movimiento.id,
                    productoId: movimiento.producto.id,
                    producto: movimiento.producto.nombre,
                    tipo: movimiento.tipo,
                    cantidad: movimiento.cantidad,
                    usuario: movimiento.usuario.nombre,
                    createdAt: movimiento.createdAt,
                    totalVenta: Number(
                        movimiento.totalVenta ?? 0,
                    ),
                    utilidad: Number(
                        movimiento.utilidad ?? 0,
                    ),
                }),
            ),
        };
    }
}