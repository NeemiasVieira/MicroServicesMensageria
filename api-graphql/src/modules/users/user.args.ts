import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UserArgs {
  
  @Field()
  name: string;

  @Field()
  idade: number;

  @Field()
  date: Date;
}
