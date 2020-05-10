import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
      entities: [],
      synchronize: true,
    }),
  ],
})
@Module({
  imports: [TypeOrmModule.forRoot(), PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
