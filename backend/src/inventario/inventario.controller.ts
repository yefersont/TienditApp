
import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Req } from '@nestjs/common';

import { InventarioService } from './inventario.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('inventario')
@UseGuards(JwtAuthGuard)
export class InventarioController {

  constructor(
    private readonly inventarioService: InventarioService,
  ) { }

  @Get()
  findAll() {
    return this.inventarioService.findAll();
  }

  @Get('historial')
  async obtenerHistorial() {
    return this.inventarioService.obtenerHistorial();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventarioService.findOne(id);
  }

  @Post()
  create(
    @Body()
    data: {
      sucursalId: string;
      nombre: string;
      descripcion?: string;
      codigoBarras?: string;
      categoriaId: string;
      precioCompra: number;
      precioVenta: number;
      stockMinimo?: number;
      cantidad?: number;
    },
    @Req() req: any,
  ) {
    return this.inventarioService.create({
      ...data,
      usuarioId: req.user.sub,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventarioService.remove(id);
  }

  @Patch('stock')
  async actualizarStock(
    @Body()
    body: {
      sucursalId: string;
      productoId: string;
      cantidad: number;
    },
    @Req() req: any,
  ) {
    return this.inventarioService.actualizarStock(
      body.sucursalId,
      body.productoId,
      body.cantidad,
      req.user.sub,
    );
  }
}