import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FinanzasService {

    constructor(private prisma: PrismaService) { }

    async obtenerFinanzas(
        sucursalId: string,
        periodo: number,
    ) {
        // =========================================================
        // VALIDAR PERÍODO
        // =========================================================

        if (![1, 7, 30].includes(periodo)) {
            throw new BadRequestException(
                'El período debe ser 1, 7 o 30 días',
            );
        }


        // =========================================================
        // FECHA INICIAL DEL PERÍODO SELECCIONADO
        // Se utiliza para las tarjetas:
        // - Ventas
        // - Costos
        // - Utilidad estimada
        // =========================================================

        const fechaInicioPeriodo = new Date();

        fechaInicioPeriodo.setHours(0, 0, 0, 0);

        fechaInicioPeriodo.setDate(
            fechaInicioPeriodo.getDate() - (periodo - 1),
        );


        // =========================================================
        // FECHA INICIAL DE LOS ÚLTIMOS 7 DÍAS
        // La gráfica SIEMPRE utiliza estos últimos 7 días.
        // No depende del filtro.
        // =========================================================

        const fechaInicio7Dias = new Date();

        fechaInicio7Dias.setHours(0, 0, 0, 0);

        fechaInicio7Dias.setDate(
            fechaInicio7Dias.getDate() - 6,
        );


        // =========================================================
        // 1. MOVIMIENTOS DEL PERÍODO SELECCIONADO
        // =========================================================

        const movimientosPeriodo =
            await this.prisma.movimientoInventario.findMany({
                where: {
                    sucursalId,
                    createdAt: {
                        gte: fechaInicioPeriodo,
                    },
                    tipo: 'SALIDA',
                },
            });


        // =========================================================
        // 2. MOVIMIENTOS DE LOS ÚLTIMOS 7 DÍAS
        // Se utilizan únicamente para la gráfica.
        // =========================================================

        const movimientosUltimos7Dias =
            await this.prisma.movimientoInventario.findMany({
                where: {
                    sucursalId,
                    createdAt: {
                        gte: fechaInicio7Dias,
                    },
                    tipo: 'SALIDA',
                },
                orderBy: {
                    createdAt: 'asc',
                },
            });


        // =========================================================
        // 3. TODOS LOS MOVIMIENTOS DE LA SUCURSAL
        // Se utilizan para:
        // - Resumen general
        // - Productos más rentables
        // =========================================================

        const movimientosHistoricos =
            await this.prisma.movimientoInventario.findMany({
                where: {
                    sucursalId,
                    tipo: 'SALIDA',
                },
                include: {
                    producto: {
                        select: {
                            id: true,
                            nombre: true,
                        },
                    },
                },
                orderBy: {
                    createdAt: 'asc',
                },
            });


        // =========================================================
        // 4. CALCULAR DATOS DEL PERÍODO
        // Estos SÍ cambian con el filtro.
        // =========================================================

        let ventas = 0;
        let costos = 0;
        let utilidad = 0;

        for (const movimiento of movimientosPeriodo) {
            const venta = Number(
                movimiento.totalVenta ?? 0,
            );

            const costo = Number(
                movimiento.costoUnitario ?? 0,
            );

            const utilidadMovimiento = Number(
                movimiento.utilidad ?? 0,
            );

            ventas += venta;

            costos += costo * movimiento.cantidad;

            utilidad += utilidadMovimiento;
        }


        // Margen del período

        const margen =
            ventas > 0
                ? Number(
                    ((utilidad / ventas) * 100).toFixed(1),
                )
                : 0;


        // =========================================================
        // 5. CALCULAR RESUMEN GENERAL
        // TODO EL HISTORIAL DE LA SUCURSAL
        // =========================================================

        let ventasGenerales = 0;
        let costosGenerales = 0;
        let utilidadGeneral = 0;

        for (const movimiento of movimientosHistoricos) {
            const venta = Number(
                movimiento.totalVenta ?? 0,
            );

            const costo = Number(
                movimiento.costoUnitario ?? 0,
            );

            const utilidadMovimiento = Number(
                movimiento.utilidad ?? 0,
            );

            ventasGenerales += venta;

            costosGenerales +=
                costo * movimiento.cantidad;

            utilidadGeneral +=
                utilidadMovimiento;
        }


        // Margen general

        const margenGeneral =
            ventasGenerales > 0
                ? Number(
                    (
                        (utilidadGeneral /
                            ventasGenerales) *
                        100
                    ).toFixed(1),
                )
                : 0;


        // =========================================================
        // 6. CALCULAR VENTAS DE LOS ÚLTIMOS 7 DÍAS
        // =========================================================

        const ventasPorDia: Record<string, number> = {};


        // Crear los 7 días con valor 0.
        // Esto garantiza que la gráfica siempre tenga
        // exactamente 7 barras.

        for (let i = 0; i < 7; i++) {
            const fecha = new Date(
                fechaInicio7Dias,
            );

            fecha.setDate(
                fecha.getDate() + i,
            );

            const fechaTexto = fecha
                .toISOString()
                .split('T')[0];

            ventasPorDia[fechaTexto] = 0;
        }


        // Agregar las ventas reales

        for (const movimiento of movimientosUltimos7Dias) {
            const venta = Number(
                movimiento.totalVenta ?? 0,
            );

            const fecha = movimiento.createdAt
                .toISOString()
                .split('T')[0];

            if (
                ventasPorDia[fecha] !== undefined
            ) {
                ventasPorDia[fecha] += venta;
            }
        }


        // =========================================================
        // 7. PRODUCTOS MÁS RENTABLES
        // TODO EL HISTORIAL
        // =========================================================

        const productosMap = new Map<
            string,
            {
                productoId: string;
                nombre: string;
                ventas: number;
                utilidad: number;
            }
        >();


        for (const movimiento of movimientosHistoricos) {
            const venta = Number(
                movimiento.totalVenta ?? 0,
            );

            const utilidadMovimiento = Number(
                movimiento.utilidad ?? 0,
            );

            const productoExistente =
                productosMap.get(
                    movimiento.productoId,
                );


            if (productoExistente) {
                productoExistente.ventas +=
                    venta;

                productoExistente.utilidad +=
                    utilidadMovimiento;
            } else {
                productosMap.set(
                    movimiento.productoId,
                    {
                        productoId:
                            movimiento.productoId,

                        nombre:
                            movimiento.producto.nombre,

                        ventas: venta,

                        utilidad:
                            utilidadMovimiento,
                    },
                );
            }
        }


        const productosRentables =
            Array.from(
                productosMap.values(),
            )
                .sort(
                    (a, b) =>
                        b.utilidad - a.utilidad,
                )
                .slice(0, 10);


        // =========================================================
        // 8. RESPUESTA
        // =========================================================

        return {
            // -----------------------------------------------------
            // RESUMEN GENERAL
            // TODO EL HISTORIAL
            // -----------------------------------------------------

            resumen: {
                ventas: ventasGenerales,
                costos: costosGenerales,
                utilidad: utilidadGeneral,
                margen: margenGeneral,
            },


            // -----------------------------------------------------
            // DATOS DEL PERÍODO SELECCIONADO
            // 1, 7 o 30 días
            // -----------------------------------------------------

            periodo: {
                ventas,
                costos,
                utilidad,
                margen,
            },


            // -----------------------------------------------------
            // GRÁFICA
            // SIEMPRE ÚLTIMOS 7 DÍAS
            // -----------------------------------------------------

            ventasPorDia:
                Object.entries(
                    ventasPorDia,
                ).map(
                    ([fecha, valor]) => ({
                        fecha,
                        valor,
                    }),
                ),


            // -----------------------------------------------------
            // PRODUCTOS MÁS RENTABLES
            // TODO EL HISTORIAL
            // -----------------------------------------------------

            productosRentables,
        };
    }
}
