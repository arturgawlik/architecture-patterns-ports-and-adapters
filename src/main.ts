import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.register({ driver: 'orm' }));
  await app
    .listen(process.env.PORT ?? 3000)
    .then(() => console.log('Server is running on http://localhost:3000'));
}
bootstrap();
