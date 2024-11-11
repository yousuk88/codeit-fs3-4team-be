import * as dotenv from "dotenv";
import express, { Router } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { CreateUser } from "./structs.js";
import { assert } from "superstruct";

dotenv.config();

const prisma = new PrismaClient();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const port = 8000;

//내 기업과 비교 대상 기어블 비교하기(정렬) prisma

// 기업명을 기준으로 검색
async function getCompanies(page, limit, name) {
  const offset = (Number(page) - 1) * Number(limit);

  //기업 조회
  const companies = await prisma.company.findMany({
    where: {
      name,
    },
    skip: offset,
    take: Number(limit),
    orderBy: {
      selectCount: "desc", // 선택 횟수 기준으로 내림차순 정렬
    },
  });
  return companies;
}

// 내 기업과 비교 대상 기어블 비교하기(정렬) api express

app.listen(port, () => console.log(`${port}서버시작`));
