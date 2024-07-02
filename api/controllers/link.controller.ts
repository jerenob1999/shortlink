import { Request, Response } from "express";
import { Link } from "../entities/link.entity";

export class LinkController {
  public static async createLink(req: Request, res: Response) {
    res.status(201).send("link");
  }

  public static async getLinks(req: Request, res: Response) {
    res.status(201).send("link");
  }
}
