import { Link } from "../entities/link.entity";
import { User } from "../entities/user.entity";
import { LinkDTO, PaginationDTO } from "../dtos";
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
    options: FindOptionsWhere<Link> | FindOptionsWhere<Link>[],
    pagination: PaginationDTO
  ) {
    const take = pagination.rowsPerPage ?? 10;
    const skip = pagination.page ?? 0;
    try {
      const [results, total] = await this.linkRepository.findAndCount({
        where: options,
        take,
        skip,
      });
      return {
        results,
        total,
      };
    } catch (error) {
      throw error;
    }
  }
}
