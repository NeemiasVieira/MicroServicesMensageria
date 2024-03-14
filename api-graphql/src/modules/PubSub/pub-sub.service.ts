import { Injectable, Logger } from "@nestjs/common";
import { PubSub } from "graphql-subscriptions";

@Injectable()
export class PubSubService{

    private readonly logger = new Logger("SubPubService")

    constructor(private readonly pubSub: PubSub) {
       
    }

    async SendMessage(novaMensagem: {enviadoPor: string, mensagem: string}){    

        const { enviadoPor, mensagem } = novaMensagem;

        this.pubSub.publish('chatMessage', {chatMessage: {
            mensagem,
            enviadoPor
        }});
    }

    async AsyncChatMessage(topic: string){
        return this.pubSub.asyncIterator(topic);
    }

}