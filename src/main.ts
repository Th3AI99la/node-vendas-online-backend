import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('Serviço Iniciado...\n');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
  console.log('\nRodando na porta 8081');
}

bootstrap();
