/* eslint-disable object-curly-spacing */
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";

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

export const startServer = onRequest(
  { region: "asia-northeast3", timeoutSeconds: 540 },
  app
);
