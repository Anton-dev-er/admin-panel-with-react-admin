import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import { AppDataSource } from "./src/data-source";
import router from "./src/routes/index";

dotenv.config();

const { CLIENT_URL_LOCAL, NODE_LOCAL_PORT } = process.env;


const allowedOrigin = [CLIENT_URL_LOCAL];

const app = express();
// @ts-ignore
const server = http.createServer(app);
const PORT = NODE_LOCAL_PORT || 5555;

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