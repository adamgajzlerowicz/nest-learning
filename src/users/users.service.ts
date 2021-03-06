import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { UserDto, User} from './user'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repo: Repository<UserDto>) {}

  async create(body: UserDto) {
    return await this.repo.save(body)
  }

  findAll() {
    return this.repo.find()
  }

  findOne(username: string): Promise<UserDto | undefined> {
    return this.repo.findOne({ username })
  }
}
