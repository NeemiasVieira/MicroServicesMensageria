import { Args, Mutation, Resolver } from "@nestjs/graphql";
import Users from "src/database/mongodb/schemas/user.schema";
import { UserArgs } from "src/modules/users/user.args";
import { User } from "src/modules/users/user.type";

@Resolver()
export class CreateUserResolver{

    @Mutation(() => User)
    async createUser(@Args() novoUsuario : UserArgs) : Promise<User>{

        const {name, idade, date} = novoUsuario;
        
        const newUser = await Users.create({
            name,
            idade,
            date
        })

        return newUser;
    }

}