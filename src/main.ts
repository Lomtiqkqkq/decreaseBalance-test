import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

const configService = new ConfigService();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = configService.get<number>('PORT') || 3000;
  app.useGlobalPipes(new ValidationPipe({}));
  await app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
}
bootstrap();
