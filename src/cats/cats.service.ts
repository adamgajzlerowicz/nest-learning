import { Injectable } from '@nestjs/common';
import {CatType} from "./cats.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Cat} from "./Cat";

@Injectable()
export class CatsService {

    constructor(@InjectRepository(Cat) private readonly repo: Repository<CatType>) {
    }

    create(body: CatType) {
        this.repo.save(body)
    }

    findAll() {
        return this.repo.find()
    }
}
