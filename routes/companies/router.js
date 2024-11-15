import express from "express";
import { PrismaClient } from "@prisma/client";

//try {} catch(err) {console.error(err);}

// npx prisma migrate dev
// npx prisma studio
const router = express.Router();
const prisma = new PrismaClient();

//전체 조회
router.get("/", async (req, res) => {
  try {
    const allData = await prisma.startUp.findMany();
    const { limit = 5, offset = 0 } = req.query;
    console.log(limit, offset);
    const getCompanies = await prisma.startUp.findMany({
      skip: Number(offset),
      take: Number(limit),
      include: {
        category: true,
      },
    });
    res.send({ data: getCompanies, totalCount: allData.length });
  } catch (err) {
    console.error(err);
  }
});

export default router;
