import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SucursalesModule } from './sucursales/sucursales.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductosModule } from './productos/productos.module';
import { InventarioModule } from './inventario/inventario.module';
import { VentasModule } from './ventas/ventas.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [PrismaModule, SucursalesModule, ProductosModule, InventarioModule, VentasModule, DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
