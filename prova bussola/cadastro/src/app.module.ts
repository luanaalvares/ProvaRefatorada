import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { CourseMiddleware } from './cursos/cursos.middleware';
import { UsuarioModule } from './usuario/usuario.module';
import { CursoModule } from './cursos/cursos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/27017'), UsuarioModule, CursoModule, AuthModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CourseMiddleware)
      .forRoutes({ path: 'curso', method: RequestMethod.POST });
}
}
