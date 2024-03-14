import { Module } from '@nestjs/common';
import { SendMessagesResolver } from './use-cases/send-messages.resolver';
import { SubscribeMessagesResolver } from './use-cases/subscrime-messages.resolver';
import { PubSubService } from '../PubSub/pub-sub.service';
import { PubSubModule } from '../PubSub/pubsub-module';


@Module({
    imports: [PubSubModule],
    providers: [SendMessagesResolver, SubscribeMessagesResolver, PubSubService],
})
export class MessagesModule {}
