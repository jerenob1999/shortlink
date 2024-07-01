import { Request, Response } from "express";

export class UserController {
  public static async postUser(req: Request, res: Response) {
    res.status(201).send("user");
  }
}
