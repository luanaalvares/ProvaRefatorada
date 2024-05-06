import { Module } from '@nestjs/common';
import { CursoController } from './cursos.controller';
import { CursoService } from './cursos.service';
import { Curso, CursoSchema } from './cursos.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from 'src/usuario/usuario.schema';

@Module({
  controllers: [CursoController],
  providers: [CursoService],
  imports: [MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }]),
  MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])]
})

export class CursoModule { }