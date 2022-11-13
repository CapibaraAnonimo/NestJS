import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ValidatorMiddleware } from './middlewares/validator/validator.middleware';
import { loggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(ValidatorMiddleware)
      .exclude(
        { path: 'users', method: RequestMethod.GET },
        { path: 'users', method: RequestMethod.DELETE },
      )
      .forRoutes(
        { path: 'users', method: RequestMethod.POST },
        { path: 'users/(*)', method: RequestMethod.PATCH },
      );
  }
}
