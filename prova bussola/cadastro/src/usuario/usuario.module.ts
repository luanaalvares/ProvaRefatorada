import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { Usuario, UsuarioSchema } from './usuario.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])],
  exports: [UsuarioService]
})

export class UsuarioModule {}