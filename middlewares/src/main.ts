import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { GeneralExeptionFilter } from './filters/exceptions/general-exeption/general-exeption.filter';
import { ValidationPipe } from '@nestjs/common';
import { MyCustomLogger } from './utils/logger/my-custom-logger/my-custom-logger';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyCustomLogger(),
  });
  const config = new DocumentBuilder()
    .setTitle('User API')
    .setDescription('API de ususarios')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(loggerMiddleware);
  app.useGlobalFilters(new GeneralExeptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
