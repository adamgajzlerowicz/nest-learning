import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import {LocalAuthGuard} from './local-auth.guard';
import {AuthService} from './auth.service';
import {User} from 'src/users/user';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any) {

    return this.authService.login((req.user))
  }

  @Post('register')
  register(@Body() user: User) {

    return this.authService.register(user)
  }

  //@UseGuards(JwtAuthGuard)
  //@Post('refresh')
  //async refresh() {
  //}
}
