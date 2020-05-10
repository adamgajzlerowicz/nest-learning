import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import { Request } from 'express';
import {CatsService} from "./cats.service";
import {CatType} from "./cats.dto";

@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) { }

    @Get()
    findAll(@Req() _request: Request): Promise<CatType[]> {
        return this.catsService.findAll()
    }

    @Post()
    create(@Body() cat: CatType){
        this.catsService.create(cat);
    }
}
