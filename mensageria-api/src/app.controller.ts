import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

interface Mensagem{
  enviadoPor: string;
  mensagem: string
}


@Controller()
export class AppController {
  constructor(
    @Inject("KAFKA_CLIENT") private readonly kafkaClient: ClientKafka
  ) {}

  @Post('enviar/mensagem')
  sendMessage(@Body() msg: Mensagem) {
    this.kafkaClient.emit('mensagens', msg);
  }
}
