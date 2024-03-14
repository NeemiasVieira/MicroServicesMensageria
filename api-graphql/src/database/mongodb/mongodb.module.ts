import { Module, OnApplicationBootstrap } from '@nestjs/common';
import mongoose from 'mongoose';

@Module({})
export class MongodbModule implements OnApplicationBootstrap {
  async onApplicationBootstrap() {
    mongoose.connect(process.env.MONGODB_HOST);
  }
}
