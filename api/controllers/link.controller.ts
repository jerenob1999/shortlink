import { Request, Response } from "express";
import { LinkDTO } from "../dtos/link.dto";
import { HttpResponse } from "../shared/response/http.response";
import { LinkService } from "../services/link.service";

export class LinkController {
  constructor(
    private readonly linkService: LinkService = new LinkService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  public async createLink(req: Request<{}, {}, LinkDTO>, res: Response) {
    try {
      const newLink = await this.linkService.createLink(req.body);

      return this.httpResponse.Created(res, newLink);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }

  public async getLinks(req: Request, res: Response) {
    try {
      const links = await this.linkService.getLinks({});
      return this.httpResponse.Ok(res, links);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
