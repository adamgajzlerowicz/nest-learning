import {Injectable} from "@nestjs/common";
import {UserValidatorInterface, UserInterface, InvalidUserException} from "@switchit/nestjs-oauth2-server";
import { AuthService } from './auth.service';

@Injectable()
export class UserValidator implements UserValidatorInterface {
  //constructor(private authService: AuthService) { }

  async validate(username: string, password: string): Promise<UserInterface> {
    //console.log(this.authService.validateUser(username, password));
    console.log(username);
    console.log(password);

    // check if the user exists with the given username and password
    // ...
    // or
    throw InvalidUserException.withUsernameAndPassword(username, password);
  }
}
