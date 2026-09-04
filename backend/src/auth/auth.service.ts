import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    // Buscar usuario por email
    const usuario = await this.prisma.usuario.findUnique({
      where: { email },
      include: { rol: true },
    });

    if (!usuario) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    if (!usuario.activo) {
      throw new UnauthorizedException('Usuario inactivo');
    }

    // Las contraseñas están en texto plano
    if (usuario.password !== password) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    // Generar JWT
    const payload = {
      sub: usuario.id,
      email: usuario.email,
      nombre: usuario.nombre,
      rol: usuario.rol.nombre,
    };

    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol.nombre,
      },
    };
  }
}
