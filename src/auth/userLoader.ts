import {Injectable} from "@nestjs/common";
import {UserLoaderInterface, UserInterface, InvalidUserException} from "@switchit/nestjs-oauth2-server";
import {UsersService} from "src/users/users.service";

@Injectable()
export class UserLoader implements UserLoaderInterface {
  //constructor(private usersService: UsersService) {}

  async load(userId: string): Promise<UserInterface> {
    //const user = await this.usersService.findOneById(userId)

    //if (user) {
        //return user
    //}

    // Load the user from the database
    // ...
    // or throw and 
    throw InvalidUserException.withId(userId);
  }
}
