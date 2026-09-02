-- CreateEnum
CREATE TYPE "TipoMovimiento" AS ENUM ('ENTRADA', 'SALIDA', 'AJUSTE');

-- CreateTable
CREATE TABLE "roles" (
    "id" UUID NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "rolId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sucursales" (
    "id" UUID NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "direccion" VARCHAR(200),
    "telefono" VARCHAR(20),
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sucursales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" UUID NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productos" (
    "id" UUID NOT NULL,
    "categoriaId" UUID NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" TEXT,
    "codigoBarras" VARCHAR(50),
    "precioCompra" DECIMAL(12,2) NOT NULL,
    "precioVenta" DECIMAL(12,2) NOT NULL,
    "stockMinimo" INTEGER NOT NULL DEFAULT 0,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventarios" (
    "id" UUID NOT NULL,
    "sucursalId" UUID NOT NULL,
    "productoId" UUID NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inventarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movimientos_inventario" (
    "id" UUID NOT NULL,
    "sucursalId" UUID NOT NULL,
    "productoId" UUID NOT NULL,
    "usuarioId" UUID NOT NULL,
    "tipo" "TipoMovimiento" NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "precioUnitario" DECIMAL(12,2),
    "costoUnitario" DECIMAL(12,2),
    "totalVenta" DECIMAL(12,2),
    "utilidad" DECIMAL(12,2),
    "observacion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movimientos_inventario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roles_nombre_key" ON "roles"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE INDEX "usuarios_rolId_idx" ON "usuarios"("rolId");

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nombre_key" ON "categorias"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "productos_codigoBarras_key" ON "productos"("codigoBarras");

-- CreateIndex
CREATE INDEX "productos_categoriaId_idx" ON "productos"("categoriaId");

-- CreateIndex
CREATE INDEX "inventarios_productoId_idx" ON "inventarios"("productoId");

-- CreateIndex
CREATE UNIQUE INDEX "inventarios_sucursalId_productoId_key" ON "inventarios"("sucursalId", "productoId");

-- CreateIndex
CREATE INDEX "movimientos_inventario_sucursalId_idx" ON "movimientos_inventario"("sucursalId");

-- CreateIndex
CREATE INDEX "movimientos_inventario_productoId_idx" ON "movimientos_inventario"("productoId");

-- CreateIndex
CREATE INDEX "movimientos_inventario_usuarioId_idx" ON "movimientos_inventario"("usuarioId");

-- CreateIndex
CREATE INDEX "movimientos_inventario_tipo_idx" ON "movimientos_inventario"("tipo");

-- CreateIndex
CREATE INDEX "movimientos_inventario_createdAt_idx" ON "movimientos_inventario"("createdAt");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productos" ADD CONSTRAINT "productos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventarios" ADD CONSTRAINT "inventarios_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "sucursales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventarios" ADD CONSTRAINT "inventarios_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimientos_inventario" ADD CONSTRAINT "movimientos_inventario_sucursalId_fkey" FOREIGN KEY ("sucursalId") REFERENCES "sucursales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimientos_inventario" ADD CONSTRAINT "movimientos_inventario_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimientos_inventario" ADD CONSTRAINT "movimientos_inventario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
