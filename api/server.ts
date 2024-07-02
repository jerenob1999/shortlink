import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./db";

async function main() {
  const app = express();
  const SECRET = "u2VRAzTEB//Xmp+zeF5L4BFKZ7pwIGwic0ZbhjV8WM0=";
  const PORT = 3000;

  AppDataSource.initialize().catch((error) => console.log(error));

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

main();
