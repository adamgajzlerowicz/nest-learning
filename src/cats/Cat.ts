import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm";
import {IsDefined, IsString} from "class-validator";
import {ApiProperty} from "@nestjsx/crud/lib/crud";

@Entity()
export class Cat {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'The age of a cat',
    minimum: 1,
    default: 1,
  })
  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column()
  name: string

  @IsDefined({ always: true })
  @IsString({ always: true })
  @Column()
  color: string

}
