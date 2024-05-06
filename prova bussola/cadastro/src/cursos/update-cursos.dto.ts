import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateCursoDto {

    @IsString()
    id: string;

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