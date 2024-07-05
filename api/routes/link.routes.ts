import { LinkController } from "../controllers/link.controller";
import { BaseRouter } from "../shared/router/router";
import { Request } from "express";
import { Params } from "../shared/interfaces/response";

export class LinkRouter extends BaseRouter<LinkController> {
  constructor() {
    super(LinkController);
  }

  routes(): void {
    this.router.post("/link", (req, res) =>
      this.controller.createLink(req, res)
    );
    this.router.get("/:userId/link", (req: Request<Params>, res) =>
      this.controller.getLinksByUserId(req, res)
    );
  }
}
