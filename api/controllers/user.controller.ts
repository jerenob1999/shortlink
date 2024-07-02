import { Request, Response } from "express";
import { UserDTO } from "../dtos/user.dto";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService: UserService = new UserService()) {}

  public async postUser(req: Request<{}, {}, UserDTO>, res: Response) {
    try {
      const newUser = await this.userService.createUser(req.body);
      res.status(201).send("user");
    } catch (error) {}
  }
}
