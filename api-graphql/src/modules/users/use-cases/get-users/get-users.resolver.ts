import { Query, Resolver } from "@nestjs/graphql";
import Users from "src/database/mongodb/schemas/user.schema";
import { User } from "src/modules/users/user.type";

@Resolver()
export class GetUsersResolver{

    @Query(() => [User])
    async getUsers(): Promise<User[]>{

        const allUsers = await Users.find();

        return allUsers;
    }

}