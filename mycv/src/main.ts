import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )

  const swaggerCofig = new DocumentBuilder().addBearerAuth().build();

  const document = SwaggerModule.createDocument(app, swaggerCofig);

  SwaggerModule.setup('docs', app, document);
  await app.listen(1947);
}
bootstrap();
