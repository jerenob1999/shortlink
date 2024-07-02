import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Link } from "./link.entity";

@Entity()
export class User extends BaseEntity {
  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => User, (user) => user.link)
  link: Link[];
}
