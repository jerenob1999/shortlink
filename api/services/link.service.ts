import { Link } from "../entities/link.entity";
import { LinkDTO } from "../dtos/link.dto";
import { AppDataSource } from "../db";
import { Repository } from "typeorm";

export class LinkService {
  private linkRepository: Repository<Link>;

  constructor() {
    this.linkRepository = AppDataSource.getRepository(Link);
  }

  public async createLink(link: LinkDTO) {
    try {
      this.linkRepository.create(link);
    } catch (error) {}
  }
}
