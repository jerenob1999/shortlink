import { UserController } from "../controllers/user.controller";
import { BaseRouter } from "../shared/router/router";
import { Request } from "express";
import { Params } from "../shared/interfaces/response";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class UserRouter extends BaseRouter<UserController, AuthMiddleware> {
  constructor() {
    super(UserController, AuthMiddleware);
  }

  routes(): void {
    this.router.post("/user", (req, res) => this.controller.postUser(req, res));
    this.router.get("/:id/user", (req: Request<Params>, res) =>
      this.controller.getUser(req, res)
    );
  }
}
