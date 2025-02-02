/* eslint-disable object-curly-spacing */
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

export const errorHandlerMiddleware = (
  err: any,
  _: any,
  res: Response,
  __: any
) => {
  if (err) {
    console.log("back API ERROR", { err, msg: err.msg });
    return res.status(err.statusCode).json({ ok: err.ok, msg: err.msg });
  }
  console.log("back 500 ERROR;", { err });
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
};
