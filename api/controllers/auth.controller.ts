import { Request, Response } from "express";
import { UserDTO } from "../dtos/user.dto";
import { HttpResponse } from "../shared/response/http.response";
import { AuthService } from "../services/auth.service";

export class AuthController {
  constructor(
    private readonly authService: AuthService = new AuthService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  public async loginUser(req: Request<{}, {}, UserDTO>, res: Response) {
    const { email, password } = req.body;
    try {
      const isValidUser = await this.authService.validateUser(email, password);
      if (!isValidUser)
        return this.httpResponse.Unauthorized(
          res,
          "Error, invalid user or password"
        );
      const login = await this.authService.login(email);
      return this.httpResponse.Ok(res, login);
    } catch (error: any) {
      return this.httpResponse.Error(res, error.message);
    }
  }
}
