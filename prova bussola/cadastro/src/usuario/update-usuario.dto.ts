import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUsuarioDto {
    id: string;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    sobrenome: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;
}