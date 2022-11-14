import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { GeneralExeptionFilter } from './filters/exceptions/general-exeption/general-exeption.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(loggerMiddleware);
  app.useGlobalFilters(new GeneralExeptionFilter());
  await app.listen(3000);
}

bootstrap();
