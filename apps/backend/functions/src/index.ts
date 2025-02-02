/* eslint-disable object-curly-spacing */
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";

import appVersionRouter from "./appVersion/appVersion.route";
import { errorHandlerMiddleware } from "./middlewares/error-handler";
import { notFoundHandlerMiddleware } from "./middlewares/not-found";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api" + "/v1" + "/appVersion", appVersionRouter);

app.use(notFoundHandlerMiddleware);
app.use(errorHandlerMiddleware);

export const startServer = onRequest(
  { region: "asia-northeast3", timeoutSeconds: 540 },
  app
);
