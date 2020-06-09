import {Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import {PostModule} from "./post/post.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Oauth2Module } from '@switchit/nestjs-oauth2-server';
import {UserLoader} from './auth/userLoader';
import {UserValidator} from './auth/user.validator';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        "type": "postgres",
        "host": "postgres",
        "port": 5432,
        "username": "foo",
        "password": "foo",
        "database": "foo",
        "autoLoadEntities": true,
        "synchronize": true
      }),
      Oauth2Module.forRoot({
        userLoader: new UserLoader(),
        userValidator: new UserValidator(),
      }),
      CatsModule,
      PostModule,
      AuthModule,
      UsersModule
    ],
    controllers: [AppController ],
    providers: [AppService],
})
export class AppModule {}
