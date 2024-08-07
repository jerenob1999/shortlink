import { Entity, Column, OneToMany, Unique } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { Link } from "./link.entity";

@Entity()
@Unique(["email"])
export class User extends BaseEntity {
  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({
    default: "",
  })
  username!: string;

  @OneToMany(() => User, (user) => user.link)
  link: Link[];
}
