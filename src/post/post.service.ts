import { Injectable } from '@nestjs/common';
import {Post} from "./post";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class PostService extends TypeOrmCrudService<Post>{
    constructor(@InjectRepository(Post) repo: any) {
        super(repo);
    }
}
