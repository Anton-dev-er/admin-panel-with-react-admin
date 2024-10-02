import { Router } from "express";
import clientController from "../controllers/client.controller";

const router = Router();
router.get("/", clientController.getMany);
router.post("/", clientController.create);
router.get("/:id", clientController.getOne);
router.put("/:id", clientController.update);
router.delete("/:id", clientController.delete);

export default router;
