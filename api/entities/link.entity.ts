import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity()
export class Link extends BaseEntity {
  @Column()
  url: string;

  @Column()
  slug: string;

  @Column()
  description?: string;

  @Column()
  clicks?: number;

  @Column()
  lastClicked?: Date;

  @ManyToOne(() => User, (user) => user.link)
  user: User;
}
