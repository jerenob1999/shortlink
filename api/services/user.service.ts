import { User } from "../entities/user.entity";
import { UserDTO } from "../dtos/user.dto";
import { Repository, FindOptionsWhere } from "typeorm";

export class UserService {
  private userRepository: Repository<User>;

  async findUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id });
  }

  async createUser(user: UserDTO): Promise<User | void> {
    try {
      const existingUser = await this.findUserById(user.id);
      if (existingUser) {
      }

      const newUser = await this.userRepository.save(user);
      return newUser;
    } catch (error) {}
  }
}
