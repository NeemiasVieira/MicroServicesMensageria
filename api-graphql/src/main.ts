import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useWebSocketAdapter(new IoAdapter(app));

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS],
        groupId: 'nestjs-group-server-2',
        sessionTimeout: 30000,
        maxWaitTimeInMs: 3000, 
        heartbeatInterval: 3000,
        connectionTimeout: 3000
      },
      consumer: {
        groupId: 'nestjs-group-server-2',
      }
    },
  });

  await app.startAllMicroservices();

  app.enableCors();
  await app.listen(3333);
}
bootstrap();
