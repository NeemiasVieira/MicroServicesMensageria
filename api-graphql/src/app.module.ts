import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { MongodbModule } from './database/mongodb/mongodb.module';
import { MessagesModule } from './modules/messages/messages.module';
import { KafkaClientModule } from './modules/KafkaClient/kafka.module';
import { PubSubModule } from './modules/PubSub/pubsub-module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
    installSubscriptionHandlers: true,
    subscriptions: {
      "graphql-ws": true,
      "subscriptions-transport-ws": true
    }
  }), UsersModule, MongodbModule, MongodbModule, MessagesModule, KafkaClientModule, PubSubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
