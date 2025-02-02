/* eslint-disable object-curly-spacing */
import { Request, Response } from "express";

export const notFoundHandlerMiddleware = (req: Request, res: Response) =>
  res.status(404).send("Route does not exist");
