import {Body, Controller, Get, Post } from '@nestjs/common';
import {CatsService} from "./cats.service";
import {CatType} from "./cats.dto";
import {Cat} from "./Cat";
import {ApiBadRequestResponse, ApiOkResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('cats')
@Controller('cats')
export class CatsController {

    constructor(private readonly catsService: CatsService) { }

    @Get()
    findAll(): Promise<CatType[]> {
        return this.catsService.findAll()
    }

    @ApiBadRequestResponse({ description: 'validation failed'})
    @ApiOkResponse({ description: 'cat created'})
    @Post()
    create(@Body() cat: Cat){
        this.catsService.create(cat);
    }
}
