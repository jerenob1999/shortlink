import { LinkController } from "../controllers/link.controller";
import { BaseRouter } from "../shared/router/router";
import { Request } from "express";
import { Params } from "../shared/interfaces/response";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class LinkRouter extends BaseRouter<LinkController, AuthMiddleware> {
  constructor() {
    super(LinkController, AuthMiddleware);
  }

  routes(): void {
    this.router.post("/link", (req, res) =>
      this.controller.createLink(req, res)
    );
    this.router.get(
      "/:id/link",
      (req: Request<Params>, res, next) => [
        this.middleware.verifyToken(req, res, next),
      ],
      (req: Request<Params>, res) => this.controller.getLinksByUserId(req, res)
    );
  }
}
