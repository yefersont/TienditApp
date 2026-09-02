import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';

@Controller('sucursales')
export class SucursalesController {
  constructor(
    private readonly sucursalesService: SucursalesService,
  ) { }

  @Get()
  findAll() {
    return this.sucursalesService.findAll();
  }

  @Post()
  create(
    @Body()
    data: {
      nombre: string;
      direccion?: string;
      telefono?: string;
    },
  ) {
    return this.sucursalesService.create(data);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.sucursalesService.eliminar(id);
  }
}