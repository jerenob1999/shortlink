import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { User } from "./user.entity";

@Entity()
export class Link extends BaseEntity {
  @Column({
    nullable: false,
  })
  FullUrl: string;

  @Column()
  shortUrl: string;

  @Column()
  description?: string;

  @Column()
  clicks?: number;

  @Column({
    nullable: true,
  })
  lastClicked?: Date;

  @ManyToOne(() => User, (user) => user.link, {
    eager: true,
  })
  @JoinColumn()
  user: User;

  @Column()
  userId: number;
}
