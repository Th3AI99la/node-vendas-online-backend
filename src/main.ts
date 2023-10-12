import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('Serviço Iniciado...\n');
async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(8080);
    console.log('\nRodando na porta 8080');
  } catch (error) {
    console.error('Não foi possível iniciar o servidor. Verifique o LOG.');
    console.error(error); // Isso exibirá o erro original no console para fins de depuração.
  }
}

bootstrap();
