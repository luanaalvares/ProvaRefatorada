import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Usuario } from 'src/usuario/usuario.schema';

export type CursoDocument = HydratedDocument<Curso>;

@Schema()
export class Curso {
  @Prop()
  nome: string;

  @Prop()
  valor: number;

  @Prop()
  duracao: number;

  @Prop()
  users: Usuario[];
}

export const CursoSchema = SchemaFactory.createForClass(Curso);