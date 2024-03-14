import { Args, ArgsType, Field, Mutation, Resolver } from "@nestjs/graphql";
import { PubSubService } from "src/modules/PubSub/pub-sub.service";

@ArgsType()
class MessageType {
  @Field(() => String)
  mensagem: string;
  @Field(() => String)
  enviadoPor: string;
}

@Resolver()
export class SendMessagesResolver {
  constructor(private readonly sendMessageService: PubSubService){}

  @Mutation(() => String!)
  async sendMessage(@Args() novaMensagem: MessageType): Promise<string> {

    await this.sendMessageService.SendMessage(novaMensagem);
    
    return `Mensagem ${novaMensagem.mensagem} enviada com sucesso!`;
  }
}
