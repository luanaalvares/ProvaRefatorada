import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCursoDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNumber()
    @IsNotEmpty()
    valor: number;

    @IsNumber()
    @IsNotEmpty()
    duracao: number;
}