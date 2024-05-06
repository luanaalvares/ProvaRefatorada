import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Curso } from './cursos.schema';
import { CreateCursoDto } from './create-cursos.dto';
import { Usuario } from 'src/usuario/usuario.schema';

@Injectable()
export class CursoService {
  findOne(username: string) {
    throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(Curso.name) private cursoModel: Model<Curso>,
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>) { }

  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    const createdCurso = new this.cursoModel(createCursoDto);
    return createdCurso.save();
  }

  findOneById(id: string): Promise<Curso> {
    return this.cursoModel.findById(id).exec();
  }

  async findAll(): Promise<Curso[]> {
    return this.cursoModel.find().exec();
  }

  async delete(id): Promise<Curso> {
    return await this.cursoModel.findOneAndDelete(id);
  }

  async update(updateCursoDto): Promise<Curso> {
    return await this.cursoModel.findByIdAndUpdate(updateCursoDto.id, updateCursoDto, { new: true });
  }

  async addUserToCourse(courseId: string, userId: string) {
    const course = await this.cursoModel.findById(courseId).exec();
    const user = await this.usuarioModel.findById(userId).exec();
    course.users.push(user);
    return await this.cursoModel.findByIdAndUpdate(courseId, course, { new: true });
  }

  async findUsersByCourse(nome: string) {
    const course = await this.cursoModel.findOne({nome: nome})
    return course.users;
  }

} 