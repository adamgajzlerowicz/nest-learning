import {Entity, PrimaryGeneratedColumn} from "typeorm";
import {Column} from "typeorm";
import {IsDefined, IsString} from "class-validator";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    productId: number;

    @IsDefined({ always: true })
    @IsString({ always: true })
    @Column()
    title: string

    @IsDefined({ always: true })
    @IsString({ always: true })
    @Column()
    content: string

    @IsDefined({ always: true })
    @Column()
    views: number

}
