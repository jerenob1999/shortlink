import { DataSource } from "typeorm";
import { AppDataSource } from "../db";

export abstract class ConfigServer {
  get initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
  }
}
