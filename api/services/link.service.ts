import { Link } from "../entities/link.entity";
import { LinkDTO } from "../dtos/link.dto";
import { Repository, FindOptionsWhere } from "typeorm";

export class LinkService {
  private linkRepository: Repository<Link>;

  public async createLink(link: LinkDTO) {
    try {
      const Link = await this.linkRepository.save(link);
      return Link;
    } catch (error) {}
  }

  public async getLinks(
    options: FindOptionsWhere<Link> | FindOptionsWhere<Link>[]
  ) {
    try {
      const Links = await this.linkRepository.findBy(options);
      return Links;
    } catch (error) {}
  }
}
