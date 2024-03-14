import { Controller, Inject } from "@nestjs/common";
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { PubSubService } from "../PubSub/pub-sub.service";

interface Mensagem {
    enviadoPor: string;
    mensagem: string;
  }

@Controller()
export class KafkaClientController{

    constructor(
        @Inject('KAFKA_CLIENT') private readonly kafkaClient: ClientKafka,
        private readonly sendMessageService: PubSubService
      ) {}
    
  @MessagePattern('mensagens')
  async handleMessage(@Payload() newMessage: Mensagem) {
    await this.sendMessageService.SendMessage(newMessage);
  }
}