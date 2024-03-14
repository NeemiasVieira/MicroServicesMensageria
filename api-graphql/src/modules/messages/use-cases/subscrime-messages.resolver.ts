import { Field, ObjectType, Resolver, Subscription } from '@nestjs/graphql';
import { PubSubService } from 'src/modules/PubSub/pub-sub.service';

@ObjectType()
class messageType {
  @Field(() => String)
  enviadoPor: string;
  @Field(() => String)
  mensagem: string;
}

@Resolver()
export class SubscribeMessagesResolver {
  constructor(private readonly pubSubService: PubSubService) {}

  @Subscription(() => messageType)
  chatMessage() {
    return this.pubSubService.AsyncChatMessage('chatMessage');
  }
}
