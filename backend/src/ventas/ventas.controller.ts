import { Body, Controller, Post } from '@nestjs/common';
import { VentasService } from './ventas.service';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) { }

  @Post()
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
  ) {
    return this.ventasService.registrarVenta(data);
  }
}