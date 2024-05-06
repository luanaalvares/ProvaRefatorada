import { HttpException, HttpStatus } from "@nestjs/common";

export class UsuarioException extends HttpException {
    constructor() {
      super('Nome proibido', HttpStatus.FORBIDDEN);
    }
  }