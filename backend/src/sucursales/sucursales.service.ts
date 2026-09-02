import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SucursalesService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.sucursal.findMany({
      where: {
        activo: true,
      },
      select: {
        id: true,
        nombre: true,
        direccion: true,
      },
      orderBy: {
        nombre: 'asc',
      },
    });
  }

  async create(data: {
    nombre: string;
    direccion?: string;
    telefono?: string;
  }) {
    return this.prisma.sucursal.create({
      data: {
        nombre: data.nombre,
        direccion: data.direccion,
        telefono: data.telefono,
      },
    });
  }

  async eliminar(id: string) {
    return this.prisma.sucursal.update({
      where: { id },
      data: {
        activo: false,
      },
      select: {
        id: true,
        nombre: true,
        activo: true,
      },
    });
  }

}