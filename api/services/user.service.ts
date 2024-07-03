import { User } from "../entities/user.entity";
import { UserDTO } from "../dtos/user.dto";
import { Repository, FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../db";

export class UserService {
  private readonly userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async findUserByParam(params: FindOptionsWhere<User>): Promise<User | null> {
    return await this.userRepository.findOneBy(params);
  }

  async createUser(user: UserDTO): Promise<User | void> {
    const newUser = await this.userRepository.save(user);
    return newUser;
  }
}
