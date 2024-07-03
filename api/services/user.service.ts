import { User } from "../entities/user.entity";
import { UserDTO } from "../dtos/user.dto";
import { Repository, FindOptionsWhere } from "typeorm";

export class UserService {
  private readonly userRepository: Repository<User>;

  async findUserByParam(params: FindOptionsWhere<User>): Promise<User | null> {
    return await this.userRepository.findOneBy(params);
  }

  async createUser(user: UserDTO): Promise<User | void> {
    try {
      const newUser = await this.userRepository.save(user);

      return newUser;
    } catch (error) {}
  }
}
