import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm";
import {IsDefined, IsString} from "class-validator";

@Entity()
export class Cat {

    @PrimaryGeneratedColumn()
    id: number;

    @IsDefined({ always: true })
    @IsString({ always: true })
    @Column()
    name: string

    @IsDefined({ always: true })
    @IsString({ always: true })
    @Column()
    color: string

}
