import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { KafkaClientController } from "./kafka.controller";
import { PubSubService } from "../PubSub/pub-sub.service";
import { PubSubModule } from "../PubSub/pubsub-module";

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'KAFKA_CLIENT',
            transport: Transport.KAFKA,
            options: {
              client: {
                brokers: ['localhost:9092'],
              },
              consumer: {
                groupId: 'nestjs-group-server-2',
              }
            },
          },
        ]),
      ],
    providers: [PubSubService],
    controllers: [KafkaClientController],
    exports: []
  })
export class KafkaClientModule{}