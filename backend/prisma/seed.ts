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
    console.log("🌱 Iniciando seed...");

    // =====================================================
    // ROLES
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

    const vendedor = await prisma.rol.upsert({
        where: {
            nombre: "Vendedor",
        },
        update: {},
        create: {
            nombre: "Vendedor",
        },
    });

    const encargadoInventario = await prisma.rol.upsert({
        where: {
            nombre: "Encargado de Inventario",
        },
        update: {},
        create: {
            nombre: "Encargado de Inventario",
        },
    });

    console.log("✅ Roles creados");

    // =====================================================
    // USUARIOS
    // =====================================================

    const usuarioAdmin = await prisma.usuario.upsert({
        where: {
            email: "admin@tienditapp.com",
        },
        update: {},
        create: {
            nombre: "Administrador TienditApp",
            email: "admin@tienditapp.com",
            password: "123456",
            rolId: administrador.id,
        },
    });

    const usuarioCarlos = await prisma.usuario.upsert({
        where: {
            email: "carlos@tienditapp.com",
        },
        update: {},
        create: {
            nombre: "Carlos Pérez",
            email: "carlos@tienditapp.com",
            password: "123456",
            rolId: vendedor.id,
        },
    });

    const usuarioLaura = await prisma.usuario.upsert({
        where: {
            email: "laura@tienditapp.com",
        },
        update: {},
        create: {
            nombre: "Laura Gómez",
            email: "laura@tienditapp.com",
            password: "123456",
            rolId: vendedor.id,
        },
    });

    const usuarioInventario = await prisma.usuario.upsert({
        where: {
            email: "inventario@tienditapp.com",
        },
        update: {},
        create: {
            nombre: "Encargado de Inventario",
            email: "inventario@tienditapp.com",
            password: "123456",
            rolId: encargadoInventario.id,
        },
    });

    console.log("✅ Usuarios creados");

    console.log({
        usuarioAdmin,
        usuarioCarlos,
        usuarioLaura,
        usuarioInventario,
    });

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

    console.log("✅ Sucursales creadas");

    console.log({
        sucursalPrincipal,
        sucursalCentro,
    });

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

    const lacteos = await prisma.categoria.upsert({
        where: {
            nombre: "Lácteos",
        },
        update: {},
        create: {
            nombre: "Lácteos",
            descripcion: "Productos derivados de la leche",
            activo: true,
        },
    });

    const aseo = await prisma.categoria.upsert({
        where: {
            nombre: "Aseo",
        },
        update: {},
        create: {
            nombre: "Aseo",
            descripcion: "Productos de limpieza",
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

    const confiteria = await prisma.categoria.upsert({
        where: {
            nombre: "Confitería",
        },
        update: {},
        create: {
            nombre: "Confitería",
            descripcion: "Dulces y golosinas",
            activo: true,
        },
    });

    console.log("✅ Categorías creadas");

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

    const jugoHit = await prisma.producto.create({
        data: {
            nombre: "Jugo Hit Mora 500ml",
            descripcion: "Jugo Hit sabor mora 500ml",
            precioCompra: 1800,
            precioVenta: 3000,
            stockMinimo: 10,
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

    const chitos = await prisma.producto.create({
        data: {
            nombre: "Chitos 45g",
            descripcion: "Snack de maíz",
            precioCompra: 1500,
            precioVenta: 2500,
            stockMinimo: 8,
            categoriaId: snacks.id,
        },
    });

    const leche = await prisma.producto.create({
        data: {
            nombre: "Leche Entera 1L",
            descripcion: "Leche entera larga vida 1 litro",
            precioCompra: 3200,
            precioVenta: 4500,
            stockMinimo: 10,
            categoriaId: lacteos.id,
        },
    });

    const yogurt = await prisma.producto.create({
        data: {
            nombre: "Yogurt Fresa 150g",
            descripcion: "Yogurt sabor fresa",
            precioCompra: 1800,
            precioVenta: 2800,
            stockMinimo: 10,
            categoriaId: lacteos.id,
        },
    });

    const jabonRey = await prisma.producto.create({
        data: {
            nombre: "Jabón Rey",
            descripcion: "Jabón para lavar",
            precioCompra: 2200,
            precioVenta: 3500,
            stockMinimo: 5,
            categoriaId: aseo.id,
        },
    });

    const detergente = await prisma.producto.create({
        data: {
            nombre: "Detergente Ariel 500g",
            descripcion: "Detergente en polvo 500 gramos",
            precioCompra: 6500,
            precioVenta: 8500,
            stockMinimo: 5,
            categoriaId: aseo.id,
        },
    });

    const arroz = await prisma.producto.create({
        data: {
            nombre: "Arroz Diana 1Kg",
            descripcion: "Arroz blanco 1 kilogramo",
            precioCompra: 4200,
            precioVenta: 5500,
            stockMinimo: 10,
            categoriaId: alimentos.id,
        },
    });

    const frijol = await prisma.producto.create({
        data: {
            nombre: "Frijol Bola Roja 500g",
            descripcion: "Frijol bola roja 500 gramos",
            precioCompra: 4800,
            precioVenta: 6500,
            stockMinimo: 5,
            categoriaId: alimentos.id,
        },
    });

    const jet = await prisma.producto.create({
        data: {
            nombre: "Chocolatina Jet 30g",
            descripcion: "Chocolatina Jet 30 gramos",
            precioCompra: 1200,
            precioVenta: 2000,
            stockMinimo: 15,
            categoriaId: confiteria.id,
        },
    });

    console.log("✅ Productos creados");

    // =====================================================
    // INVENTARIOS
    // =====================================================

    const productos = [
        cocaCola,
        aguaCristal,
        jugoHit,
        papasMargarita,
        chitos,
        leche,
        yogurt,
        jabonRey,
        detergente,
        arroz,
        frijol,
        jet,
    ];

    for (const producto of productos) {
        await prisma.inventario.upsert({
            where: {
                sucursalId_productoId: {
                    sucursalId: sucursalPrincipal.id,
                    productoId: producto.id,
                },
            },
            update: {},
            create: {
                sucursalId: sucursalPrincipal.id,
                productoId: producto.id,
                cantidad: Math.floor(Math.random() * 40) + producto.stockMinimo,
            },
        });

        await prisma.inventario.upsert({
            where: {
                sucursalId_productoId: {
                    sucursalId: sucursalCentro.id,
                    productoId: producto.id,
                },
            },
            update: {},
            create: {
                sucursalId: sucursalCentro.id,
                productoId: producto.id,
                cantidad: Math.floor(Math.random() * 30) + producto.stockMinimo,
            },
        });
    }

    console.log("✅ Inventarios creados");

    // =====================================================
    // MOVIMIENTOS DE INVENTARIO
    // =====================================================

    // ENTRADAS
    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: cocaCola.id,
            usuarioId: usuarioInventario.id,
            tipo: "ENTRADA",
            cantidad: 50,
            precioUnitario: cocaCola.precioVenta,
            costoUnitario: cocaCola.precioCompra,
            observacion: "Compra inicial de mercancía",
        },
    });

    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: aguaCristal.id,
            usuarioId: usuarioInventario.id,
            tipo: "ENTRADA",
            cantidad: 40,
            precioUnitario: aguaCristal.precioVenta,
            costoUnitario: aguaCristal.precioCompra,
            observacion: "Compra inicial de mercancía",
        },
    });

    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalCentro.id,
            productoId: papasMargarita.id,
            usuarioId: usuarioInventario.id,
            tipo: "ENTRADA",
            cantidad: 30,
            precioUnitario: papasMargarita.precioVenta,
            costoUnitario: papasMargarita.precioCompra,
            observacion: "Reposición de inventario",
        },
    });


    // =====================================================
    // SALIDAS
    // =====================================================

    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: cocaCola.id,
            usuarioId: usuarioCarlos.id,
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

    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: aguaCristal.id,
            usuarioId: usuarioLaura.id,
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

    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalCentro.id,
            productoId: papasMargarita.id,
            usuarioId: usuarioCarlos.id,
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


    // =====================================================
    // AJUSTES
    // =====================================================

    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalPrincipal.id,
            productoId: leche.id,
            usuarioId: usuarioInventario.id,
            tipo: "AJUSTE",
            cantidad: -2,
            observacion: "Diferencia encontrada en inventario físico",
        },
    });

    await prisma.movimientoInventario.create({
        data: {
            sucursalId: sucursalCentro.id,
            productoId: yogurt.id,
            usuarioId: usuarioInventario.id,
            tipo: "AJUSTE",
            cantidad: 3,
            observacion: "Corrección de inventario físico",
        },
    });

    console.log("✅ Movimientos de inventario creados");
}
main()
    .catch((error) => {
        console.error("❌ Error:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });