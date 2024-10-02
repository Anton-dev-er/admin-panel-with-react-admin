import { Router } from "express";
import categoryController from "../controllers/category.controller";

const router = Router();
router.get("/", categoryController.getMany);
router.post("/", categoryController.create);
router.get("/:id", categoryController.getOne);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

export default router;
