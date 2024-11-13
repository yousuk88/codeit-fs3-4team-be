import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import ksj from "./routes/router_sujeong.js";
import investment from "./routes/router_investment.js";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", ksj);
app.use("/investment", investment);
const port = 8000;

app.listen(port, () => console.log(`${port}서버시작`));
