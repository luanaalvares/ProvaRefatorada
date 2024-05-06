import { HttpException, HttpStatus } from "@nestjs/common";

export class CursosException extends HttpException {
    constructor() {
      super('Nome proibido', HttpStatus.FORBIDDEN);
    }
  }