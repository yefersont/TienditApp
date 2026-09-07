import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { VentasService } from './ventas.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  registrarVenta(
    @Body()
    data: {
      sucursalId: string;
      items: {
        productoId: string;
        cantidad: number;
        precioUnitario: number;
      }[];
    },
    @Req() req: any,
  ) {
    const usuarioId = req.user.sub;

    return this.ventasService.registrarVenta(data, usuarioId);
  }
}