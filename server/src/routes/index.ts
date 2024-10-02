import Router from "express";
import categoryRouter from "./category.router";
import clientRouter from "./client.router";
import dashboardRouter from "./dashboard.router";
import orderRouter from "./order.router";
import productRouter from "./product.router";

const router = Router();
router.use("/clients", clientRouter);
router.use("/orders", orderRouter);
router.use("/products", productRouter);
router.use("/categories", categoryRouter);
router.use("/dashboard", dashboardRouter);


export default router;