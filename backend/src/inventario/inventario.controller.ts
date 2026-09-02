import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { InventarioService } from './inventario.service';

@Controller('inventario')
export class InventarioController {
  constructor(
    private readonly inventarioService: InventarioService,
  ) { }

  @Get()
  findAll() {
    return this.inventarioService.findAll();
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
  ) {
    return this.inventarioService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventarioService.remove(id);
  }
}