import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm";
import {IsDefined, IsString} from "class-validator";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column()
  username: string

  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column()
  password: string
}

export type UserDto = {
 username: string
 password: string
}
