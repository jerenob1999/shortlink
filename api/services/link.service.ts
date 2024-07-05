import { Link } from "../entities/link.entity";
import { User } from "../entities/user.entity";
import { LinkDTO } from "../dtos/link.dto";
import { Repository, FindOptionsWhere } from "typeorm";
import { AppDataSource } from "../db";

export class LinkService {
  private linkRepository: Repository<Link>;
  private userRepository: Repository<User>;

  constructor() {
    this.linkRepository = AppDataSource.getRepository(Link);
    this.userRepository = AppDataSource.getRepository(User);
  }

  public async createLink(link: LinkDTO) {
    try {
      const user = await this.userRepository.findOne({
        where: { id: link.userId },
      });
      if (user) {
        const Link = await this.linkRepository.save(link);
        Link.user = user;
        await this.userRepository.save(user);

        return Link;
      }
    } catch (error: any) {
      throw error;
    }
  }

  public async getLinks(
    options: FindOptionsWhere<Link> | FindOptionsWhere<Link>[]
  ) {
    try {
      const Links = await this.linkRepository.findBy(options);
      return Links;
    } catch (error) {
      throw error;
    }
  }
}
