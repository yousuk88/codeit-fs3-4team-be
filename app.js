import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
const port = 8000;

app.listen(port, () => console.log(`${port}서버시작`));
