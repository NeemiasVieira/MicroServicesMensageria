import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar o microserviço Kafka
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS],
        groupId: 'nestjs-group-server',
        sessionTimeout: 30000,
        maxWaitTimeInMs: 3000, 
        heartbeatInterval: 3000
      },
      consumer: {
        groupId: 'nestjs-group-server',
      }
    },
  });

  // Iniciar o microserviço Kafka
  await app.startAllMicroservices();

  // Iniciar a aplicação principal para receber requisições HTTP
  await app.listen(8080, () => {
    console.log('App is listening on port 8080');
  });
}

bootstrap();
