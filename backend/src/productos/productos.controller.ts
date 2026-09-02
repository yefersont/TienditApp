import { Controller, Get, Param } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) { }

  @Get('sucursal/:sucursalId')
  findBySucursal(@Param('sucursalId') sucursalId: string) {
    return this.productosService.findBySucursal(sucursalId);
  }
}