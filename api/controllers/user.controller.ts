import { Request, Response } from "express";
import { UserDTO } from "../dtos/user.dto";
import { UserService } from "../services/user.service";
import { HttpResponse } from "../shared/response/http.response";

export class UserController {
  constructor(
    private readonly userService: UserService = new UserService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  public async postUser(req: Request<{}, {}, UserDTO>, res: Response) {
    try {
      const checkUser = await this.userService.findUserByParam({
        email: req.body.email,
      });
      if (checkUser) {
        this.httpResponse.Forbidden(
          res,
          "There is already a user with this email"
        );
      }
      const newUser = await this.userService.createUser(req.body);
      this.httpResponse.Created(res, newUser);
    } catch (error) {
      console.error(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
