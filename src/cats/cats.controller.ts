import {Body, Controller, Get, Post, Req} from '@nestjs/common';
import { Request } from 'express';
import {CatsService} from "./cats.service";
import {CatType} from "./cats.dto";
import {Cat} from "./Cat";
import {ApiBadRequestResponse, ApiDefaultResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('cats')
@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) { }

    @Get()
    findAll(@Req() _request: Request): Promise<CatType[]> {
        return this.catsService.findAll()
    }

    @ApiBadRequestResponse({ description: 'validation failed'})
    @ApiOkResponse({ description: 'cat created'})
    @Post()
    create(@Body() cat: Cat){
        this.catsService.create(cat);
    }
}
