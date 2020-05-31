import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {UsersService} from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

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

  async login(user: { username: string, id: string}) {
    const payload = { username: user.username, sub: user.id }

    return {
      "access_token": this.jwtService.sign(payload)
    }
  }
}
