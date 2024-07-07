import { Repository, FindOptionsWhere } from "typeorm";
import { User } from "../entities/user.entity";
import { UserDTO } from "../dtos/user.dto";
import { AppDataSource } from "../db";
import * as bcrypt from "bcrypt";

export class UserService {
  private readonly userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async findUserByParam(params: FindOptionsWhere<User>): Promise<User | null> {
    return await this.userRepository.findOneBy(params);
  }

  async createUser(user: UserDTO): Promise<User | void> {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      const newUser = await this.userRepository.save(user);

      return newUser;
    } catch (error) {
      console.log(error);
    }
  }
}
