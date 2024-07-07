import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ConfigServer } from "../config/config";
import { HttpResponse } from "../shared/response/http.response";

export class AuthMiddleware extends ConfigServer {
  private secret: string | undefined;

  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {
    super();
    this.secret = this.getEnvironment("SECRET");
  }

  public verifyToken(req: Request<any>, res: Response, next: NextFunction) {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return this.httpResponse.Unauthorized(res, "Access denied");
    try {
      jwt.verify(token, this.secret as string);
      next();
    } catch (error: any) {
      return this.httpResponse.Unauthorized(res, error.message);
    }
  }
}

// const jwt = require('jsonwebtoken');
// function verifyToken(req, res, next) {
// const token = req.header('Authorization');
// if (!token) return res.status(401).json({ error: 'Access denied' });
// try {
//  const decoded = jwt.verify(token, 'your-secret-key');
//  req.userId = decoded.userId;
//  next();
//  } catch (error) {
//  res.status(401).json({ error: 'Invalid token' });
//  }
//  };

// module.exports = verifyToken;
