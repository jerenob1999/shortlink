import { HttpResponse } from "../shared/response/http.response";
import { LinkService } from "../services/link.service";
import { Params } from "../shared/interfaces/response";
import { Request, Response } from "express";
import { LinkDTO } from "../dtos/link.dto";

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

  public async getLinksByUserId(req: Request<Params>, res: Response) {
    const id = req.params.id;
    try {
      if (!id) return this.httpResponse.Error(res, "Missing user id");
      const links = await this.linkService.getLinks({ id });

      return this.httpResponse.Ok(res, links);
    } catch (error) {
      console.error(error);

      return this.httpResponse.Error(res, error);
    }
  }
}
