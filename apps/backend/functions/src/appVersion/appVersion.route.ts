import * as express from "express";
import { Request, Response } from "express";
import { prisma } from "../prismaClient";

const router = express.Router();

const landing = async (req: Request, res: Response) => {
  const result = await prisma.appVersion.findFirst({});

  if (!result) {
    throw new Error("Please retry to check app version");
  }
  res.json({
    ok: true,
    data: {
      major: result.major,
      minor: result.minor,
      patch: result.patch,
    },
  });
};

router.get("/", landing);

export default router;
