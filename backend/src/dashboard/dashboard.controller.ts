import { Controller, Get, Param } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) { }

  @Get(':sucursalId')
  obtenerDashboard(@Param('sucursalId') sucursalId: string) {
    return this.dashboardService.obtenerDashboard(sucursalId);
  }
}