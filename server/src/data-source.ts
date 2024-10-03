import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { CategoryEntity } from "./entities/category.entity";
import { ClientEntity } from "./entities/client.entity";
import { OrderEntity } from "./entities/order.entity";
import { ProductEntity } from "./entities/product.entity";

dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
console.log(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: +DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [CategoryEntity, ClientEntity, OrderEntity, ProductEntity]
});

