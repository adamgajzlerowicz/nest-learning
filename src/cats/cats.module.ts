import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Cat} from "./Cat";

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  imports: [TypeOrmModule.forFeature([Cat])]
})
export class CatsModule {}
