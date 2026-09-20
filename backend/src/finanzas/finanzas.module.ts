import { Module } from '@nestjs/common';
import { FinanzasService } from './finanzas.service';
import { FinanzasController } from './finanzas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FinanzasController],
  providers: [FinanzasService, PrismaService],
})
export class FinanzasModule { }
