import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(PORT);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
