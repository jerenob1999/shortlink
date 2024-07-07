import * as bcrypt from "bcrypt";
import { User } from "../entities/user.entity";
import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { AppDataSource } from "../db";
import { ConfigServer } from "../config/config";

export class AuthService extends ConfigServer {
  private userRepository: Repository<User>;
  private secret: undefined | string;
  constructor() {
    super();
    this.userRepository = AppDataSource.getRepository(User);
    this.secret = this.getEnvironment("SECRET");
  }

  public async validateUser(
    email: string,
    plainPassword: string
  ): Promise<User | null> {
    try {
      const userByEmail = await this.userRepository.findOneBy({ email });

      if (!userByEmail) return null;

      const isMatchPassword = await bcrypt.compare(
        plainPassword,
        userByEmail.password
      );

      if (!isMatchPassword) return null;

      return userByEmail;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  public async login(email: string) {
    const token = jwt.sign({ email }, this.secret as string, {
      expiresIn: "48h",
    });

    return token;
  }
}
