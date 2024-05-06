import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario.schema';
import { CreateUsuarioDto } from './create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  findOneById(id: string): Promise<Usuario> {
    return this.usuarioModel.findById(id).exec();
  }

  async findByName(nome: string): Promise<Usuario> {
    return await this.usuarioModel.findOne({ nome });
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async delete(id): Promise<Usuario> {
    return await this.usuarioModel.findOneAndDelete(id);
  }

  async update(updateUsuarioDto): Promise<Usuario> {
    return await this.usuarioModel.findByIdAndUpdate(updateUsuarioDto.id, updateUsuarioDto, { new: true });
  }
}