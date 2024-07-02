require("dotenv").config();
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  username: "postgres",
  password: "4179",
  host: "localhost",
  port: 5432, // default Postgres port
  database: "shortlink",
  type: "postgres",
  synchronize: false,
  entities: ["src/entities/**/*.entity{.ts,.js}"],
  migrations: ["src/migrations/**/*{.ts,.js}"],
  subscribers: ["src/subscribers/**/*{.ts,.js}"],
});
