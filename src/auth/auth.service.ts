import { Injectable } from '@nestjs/common';
import {UsersService} from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username)
    console.log(pass);
    console.log("value");
    //if (user && user.password === pass) {
    if (user) {
      // eslint-disable-next-line
      const { password, ...result } = user

      return result
    }

    return null
  }
}
