import { NextFunction, Request } from 'express';

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(
    `endpoint called to: ${req.baseUrl}${req.url}, with method: ${
      req.method
    }, with body: ${JSON.stringify(req.body)}`,
  );
  next();
}
