import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

interface User {
  name: string;
  surname: string;
}

@Injectable()
export class ValidatorMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const user: User = req.body;
    if (!user.name || !user.surname) {
      const errorMessage = 'Invalid Body Request';
      console.log(`Error: ${errorMessage}`);
      return res.status(400).send(errorMessage);
    }
    next();
  }
}
