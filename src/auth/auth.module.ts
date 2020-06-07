import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersModule} from 'src/users/users.module';
import {LocalStrategy} from './local.strategy';
import { AuthController } from './auth.controller';
import {jwtConstants} from './constants';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategy} from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({ 
      secret: jwtConstants.secret, 
      verifyOptions: {
        ignoreExpiration: true
      }
    }),
    UsersModule, 
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
