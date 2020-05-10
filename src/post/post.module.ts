import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "./post";

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
