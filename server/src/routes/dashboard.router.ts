import { Router } from "express";
import dashboardController from "../controllers/dashboard.controller";

const router = Router();
router.get("/order-rate", dashboardController.getOrdersByDate);
router.get("/products-price-by-category", dashboardController.getProductsPriceByCategory);
router.get("/products-ordered-count", dashboardController.getProductsOrderedCount);


export default router;
