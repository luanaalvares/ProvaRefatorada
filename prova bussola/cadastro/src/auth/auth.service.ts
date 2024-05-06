import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuarioService, private jwtService: JwtService) { }

    async signIn(
        username: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usuarioService.findByName(username);
        if (user?.senha !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { email: user.email, senha: user.senha };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}