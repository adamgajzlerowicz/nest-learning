import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import {OauthGuard} from 'src/auth/oauth.guard';

@Controller('users')
export class UsersController {

  @UseGuards(OauthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user
  }
}
