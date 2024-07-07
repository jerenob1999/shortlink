import { AuthController } from "../controllers/auth.controller";
import { BaseRouter } from "../shared/router/router";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class AuthRouter extends BaseRouter<AuthController, AuthMiddleware> {
  constructor() {
    super(AuthController, AuthMiddleware);
  }

  routes(): void {
    this.router.post("/auth", (req, res) =>
      this.controller.loginUser(req, res)
    );
  }
}
