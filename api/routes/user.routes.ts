import { UserController } from "../controllers/user.controller";
import { BaseRouter } from "../shared/router/router";

export class CustomerRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.post("/user", (req, res) => this.controller.postUser(req, res));
  }
}
