import "reflect-metadata";
import express, { Application, Router } from "express";
import { UserRouter, LinkRouter } from "./routes";
import { AppDataSource } from "./db";
import cors from "cors";
import morgan from "morgan";

class Main {
  public app: Application = express();
  private PORT: number = 3000;

  constructor() {
    this.app.use(cors());
    this.app.use(morgan("common"));
    this.app.use(express.json());
    this.app.use("/api/v1", this.routers());
    this.app.listen(this.PORT, () => {
      console.log(`Server listening on port ${this.PORT}`);
    });
    AppDataSource.initialize().catch((error) => console.log(error));
  }

  routers(): Router[] {
    return [new UserRouter().router, new LinkRouter().router];
  }
}

new Main();
