import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ProductosService } from './productos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('productos')
export class ProductosController {

  constructor(
    private readonly productosService: ProductosService,
  ) { }

  @Get('sucursal/:sucursalId')
  findBySucursal(@Param('sucursalId') sucursalId: string) {
    return this.productosService.findBySucursal(sucursalId);
  }

  @Patch('precio')
  @UseGuards(JwtAuthGuard)
  actualizarPrecio(
    @Body()
    data: {
      sucursalId: string;
      productoId: string;
      precioCompra?: number;
      precioVenta?: number;
    },
    @Req() req: any,
  ) {
    const usuarioId = req.user.sub;

    return this.productosService.actualizarPrecio({
      ...data,
      usuarioId,
    });
  }
}