import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./src/routes/index";
import dotenv from "dotenv";
import http from "http";
import { AppDataSource } from "./src/data-source";

dotenv.config();

const {CLIENT_URL_LOCAL} = process.env;


const allowedOrigin = [CLIENT_URL_LOCAL];

const app = express();
// @ts-ignore
const server = http.createServer(app);
const PORT = process.env.PORT || 5555;

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: allowedOrigin}));
app.use("/", router);


const letsGo = async () => {
  try {
    await AppDataSource.initialize();
    server.listen(PORT, () => console.log(`localhost:${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

void letsGo();