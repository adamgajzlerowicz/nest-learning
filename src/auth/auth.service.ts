import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import {UsersService} from 'src/users/users.service';
import {User} from 'src/users/user';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username)
    const passMatched = await bcrypt.compare(pass, user.password)

    if (user && passMatched) {
      // eslint-disable-next-line
      const { password, ...result } = user

      return result
    }

    return null
  }

  async login(user: { username: string, id: string}) {
    const payload = { username: user.username, sub: user.id }

    return {
      "access_token": this.jwtService.sign({ ...payload, type: 'access_token'}),
      "refresh_token": this.jwtService.sign({ ...payload, type: 'refresh_token'}),
    }
  }

  async register(user: User) {
    const hashed = await bcrypt.hash(user.password, 10)

    try {
      // eslint-disable-next-line
      const { password, ...createdUser } = await this.usersService.create({ 
        ...user,
        password: hashed
      })

      return createdUser 
    } catch(e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST)
    }

  }
}


