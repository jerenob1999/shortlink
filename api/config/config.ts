// import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import { AppDataSource } from "../db";

export abstract class ConfigServer {
  get initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
  }

  public getEnvironment(k: string): string | undefined {
    return process.env[k];
  }

  public getNumberEnv(k: string): number {
    return Number(this.getEnvironment(k));
  }
}
