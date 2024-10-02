import { Router } from "express";
import productController from "../controllers/product.controller";

const router = Router();
router.get("/", productController.getMany);
router.post("/", productController.create);
router.get("/:id", productController.getOne);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

export default router;
