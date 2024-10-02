import { Router } from "express";
import orderController from "../controllers/order.controller";

const router = Router();
router.get("/", orderController.getMany);
router.post("/", orderController.create);
router.get("/:id", orderController.getOne);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.delete);

export default router;
