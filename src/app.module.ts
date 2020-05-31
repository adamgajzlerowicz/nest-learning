import {Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import {PostModule} from "./post/post.module";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UserController } from './user/user.controller';

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
            }
        ),
        CatsModule,
        PostModule,
        AuthModule,
        UsersModule
    ],
    controllers: [AppController, UserController],
    providers: [AppService],
})
export class AppModule {}
