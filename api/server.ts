import "reflect-metadata";
import express, { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";

function main() {
  const app = express();
  const SECRET = "u2VRAzTEB//Xmp+zeF5L4BFKZ7pwIGwic0ZbhjV8WM0=";
  const PORT = 3000;

  app.post("/verify", (req: Request, res: Response) => {
    const token = sign({ sub: 2, name: "jere" }, SECRET);

    res.status(200).send(token);
  });

  app.get("/private", (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization?.split(" ")[1] ?? "";
      const verifyToken = verify(token, SECRET);

      res.send("logged");
    } catch (error: any) {
      res.status(401).send(error.message);
    }
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

main();
