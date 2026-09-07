import "dotenv/config";

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    console.log("Iniciando seed...");

    // =====================================================
    // ROL
    // =====================================================

    const administrador = await prisma.rol.upsert({
        where: {
            nombre: "Administrador",
        },
        update: {},
        create: {
            nombre: "Administrador",
        },
    });

    console.log("Rol creado");

    // =====================================================
    // USUARIO
    // =====================================================

    const usuarioAdmin = await prisma.usuario.upsert({
        where: {
            email: "Angie@tienditapp.com",
        },
        update: {},
        create: {
            nombre: "Administrador TienditApp",
            email: "Angie@tienditapp.com",
            password: "123456",
            rolId: administrador.id,
        },
    });

    const usuarioYefer = await prisma.usuario.upsert({
        where: {
            email: "Yeferson@tienditapp.com",
        },
        update: {},
        create: {
            nombre: "Administrador TienditApp",
            email: "Yeferson@tienditapp.com",
            password: "123456",
            rolId: administrador.id,
        },
    });

    console.log("Usuarios creados");

    // =====================================================
    // SUCURSALES
    // =====================================================

    let sucursalPrincipal = await prisma.sucursal.findFirst({
        where: {
            nombre: "Sucursal Principal",
        },
    });

    if (!sucursalPrincipal) {
        sucursalPrincipal = await prisma.sucursal.create({
            data: {
                nombre: "Sucursal Principal",
                direccion: "Carrera 7 # 15-20",
                telefono: "3001234567",
                activo: true,
            },
        });
    }

    let sucursalCentro = await prisma.sucursal.findFirst({
        where: {
            nombre: "Sucursal Centro",
        },
    });

    if (!sucursalCentro) {
        sucursalCentro = await prisma.sucursal.create({
            data: {
                nombre: "Sucursal Centro",
                direccion: "Calle 20 # 8-35",
                telefono: "3019876543",
                activo: true,
            },
        });
    }

    console.log("Sucursales creadas");

    // =====================================================
    // CATEGORÍAS
    // =====================================================

    const bebidas = await prisma.categoria.upsert({
        where: {
            nombre: "Bebidas",
        },
        update: {},
        create: {
            nombre: "Bebidas",
            descripcion: "Bebidas frías y calientes",
            activo: true,
        },
    });

    const snacks = await prisma.categoria.upsert({
        where: {
            nombre: "Snacks",
        },
        update: {},
        create: {
            nombre: "Snacks",
            descripcion: "Productos para picar",
            activo: true,
        },
    });

    const alimentos = await prisma.categoria.upsert({
        where: {
            nombre: "Alimentos",
        },
        update: {},
        create: {
            nombre: "Alimentos",
            descripcion: "Productos alimenticios",
            activo: true,
        },
    });

    console.log("Categorías creadas");

    // =====================================================
    // PRODUCTOS
    // =====================================================

    const cocaCola = await prisma.producto.create({
        data: {
            nombre: "Coca Cola 400ml",
            descripcion: "Bebida gaseosa Coca Cola 400ml",
            precioCompra: 1800,
            precioVenta: 3000,
            stockMinimo: 10,
            categoriaId: bebidas.id,
        },
    });

    const aguaCristal = await prisma.producto.create({
        data: {
            nombre: "Agua Cristal 600ml",
            descripcion: "Agua embotellada 600ml",
            precioCompra: 1200,
            precioVenta: 2000,
            stockMinimo: 15,
            categoriaId: bebidas.id,
        },
    });

    const papasMargarita = await prisma.producto.create({
        data: {
            nombre: "Papas Margarita Natural 105g",
            descripcion: "Papas fritas sabor natural",
            precioCompra: 2500,
            precioVenta: 4000,
            stockMinimo: 8,
            categoriaId: snacks.id,
        },
    });

    console.log("Productos creados");

    // =====================================================
    // INVENTARIOS
    // =====================================================

    const productos = [
        {
            producto: cocaCola,
            principal: 30,
            centro: 20,
        },
        {
            producto: aguaCristal,
            principal: 40,
            centro: 25,
        },
        {
            producto: papasMargarita,
            principal: 20,
            centro: 15,
        },
    ];

    for (const item of productos) {
        await prisma.inventario.upsert({
            where: {
                sucursalId_productoId: {
                    sucursalId: sucursalPrincipal.id,
                    productoId: item.producto.id,
                },
            },
            update: {},
            create: {
                sucursalId: sucursalPrincipal.id,
                productoId: item.producto.id,
                cantidad: item.principal,
            },
        });

        await prisma.inventario.upsert({
            where: {
                sucursalId_productoId: {
                    sucursalId: sucursalCentro.id,
                    productoId: item.producto.id,
                },
            },
            update: {},
            create: {
                sucursalId: sucursalCentro.id,
                productoId: item.producto.id,
                cantidad: item.centro,
            },
        });
    }

    console.log("Inventarios creados");

    // =====================================================
    // MOVIMIENTOS DE INVENTARIO
    // =====================================================

    // ENTRADA - Coca Cola
    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: cocaCola.id,
            usuarioId: usuarioAdmin.id,
            tipo: "ENTRADA",
            cantidad: 50,
            precioUnitario: cocaCola.precioVenta,
            costoUnitario: cocaCola.precioCompra,
            observacion: "Compra inicial de mercancía",
        },
    });

    // ENTRADA - Agua Cristal
    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalCentro.id,
            productoId: aguaCristal.id,
            usuarioId: usuarioAdmin.id,
            tipo: "ENTRADA",
            cantidad: 40,
            precioUnitario: aguaCristal.precioVenta,
            costoUnitario: aguaCristal.precioCompra,
            observacion: "Compra inicial de mercancía",
        },
    });

    // SALIDA - Coca Cola
    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: cocaCola.id,
            usuarioId: usuarioAdmin.id,
            tipo: "SALIDA",
            cantidad: 3,
            precioUnitario: cocaCola.precioVenta,
            costoUnitario: cocaCola.precioCompra,
            totalVenta: 3 * Number(cocaCola.precioVenta),
            utilidad:
                3 *
                (Number(cocaCola.precioVenta) -
                    Number(cocaCola.precioCompra)),
            observacion: "Venta de mostrador",
        },
    });

    // SALIDA - Agua Cristal
    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalCentro.id,
            productoId: aguaCristal.id,
            usuarioId: usuarioAdmin.id,
            tipo: "SALIDA",
            cantidad: 5,
            precioUnitario: aguaCristal.precioVenta,
            costoUnitario: aguaCristal.precioCompra,
            totalVenta: 5 * Number(aguaCristal.precioVenta),
            utilidad:
                5 *
                (Number(aguaCristal.precioVenta) -
                    Number(aguaCristal.precioCompra)),
            observacion: "Venta de mostrador",
        },
    });

    // SALIDA - Papas Margarita
    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalCentro.id,
            productoId: papasMargarita.id,
            usuarioId: usuarioAdmin.id,
            tipo: "SALIDA",
            cantidad: 2,
            precioUnitario: papasMargarita.precioVenta,
            costoUnitario: papasMargarita.precioCompra,
            totalVenta: 2 * Number(papasMargarita.precioVenta),
            utilidad:
                2 *
                (Number(papasMargarita.precioVenta) -
                    Number(papasMargarita.precioCompra)),
            observacion: "Venta de mostrador",
        },
    });

    // AJUSTE - Coca Cola
    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: cocaCola.id,
            usuarioId: usuarioAdmin.id,
            tipo: "AJUSTE",
            cantidad: -2,
            observacion: "Diferencia encontrada en inventario físico",
        },
    });

    console.log("Movimientos de inventario creados");

    console.log("Seed completado correctamente");


}

main()
    .catch((error) => {
        console.error("Error:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
