require("dotenv").config();
import "reflect-metadata";
import { DataSource } from "typeorm";

const postgresConfig = {
  user: "postgres",
  password: "4179",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "shortlink",
};

export const AppDataSource = new DataSource({
  ...postgresConfig,
  type: "postgres",
  synchronize: false,
  logging: false,
  entities: ["src/entities/**/*.entity{.ts,.js}"],
  migrations: ["src/migrations/**/*{.ts,.js}"],
  subscribers: ["src/subscribers/**/*{.ts,.js}"],
});
