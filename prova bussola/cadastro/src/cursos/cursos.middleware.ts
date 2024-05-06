import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction } from 'express';

@Injectable()
export class CourseMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body.valor = req.body.valor * 0.5
    next();
  }
}