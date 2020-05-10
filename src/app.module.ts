import {Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import {PostModule} from "./post/post.module";

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
                "synchronize": false
            }
        ),
        CatsModule,
        PostModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
