import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { UserDto, User, UserType} from './user'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly repo: Repository<UserType>) {}

  async create(body: UserDto) {
    return await this.repo.save(body)
  }

  findAll() {
    return this.repo.find()
  }

  findOne(username: string): Promise<UserType | undefined> {
    return this.repo.findOne({ username })
  }

  findOneById(id: string): Promise<UserType | undefined> {
    return this.repo.findOne(id)
  }
}
