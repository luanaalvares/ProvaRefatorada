import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { CreateUsuarioDto } from './create-usuario.dto';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.schema';
import { UpdateUsuarioDto } from './update-usuario.dto';
import { UsuarioException } from './usuario.exception';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    if(createUsuarioDto.nome === 'hello kitty')
      throw new UsuarioException()
    this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  async findAll(): Promise<Usuario[]> {
    new ForbiddenException();
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usuarioService.findOneById(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usuarioService.delete(id);
  }

  @Put()
  async update(@Body() updateUsuarioDto: UpdateUsuarioDto) {
    if(updateUsuarioDto.senha === '123')
      throw new ForbiddenException('Escolhe uma senha boa pf');
    return await this.usuarioService.update(updateUsuarioDto);
  }

}