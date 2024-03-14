import { Module } from '@nestjs/common';
import { GetUsersResolver } from './use-cases/get-users/get-users.resolver';
import { UpdateUserResolver } from './use-cases/update-user/update-user.resolver';
import { CreateUserResolver } from './use-cases/create-user/create-user.resolver';
import { DeleteUserResolver } from './use-cases/delete-user/delete-user.resolver';

@Module({
    providers: [GetUsersResolver, UpdateUserResolver, CreateUserResolver, DeleteUserResolver],
})
export class UsersModule {}
