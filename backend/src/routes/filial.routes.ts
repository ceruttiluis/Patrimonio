import { Router } from "express";
import { FilialController } from "../controller/filialController";

const router = Router();
const controller = new FilialController();

router.get("/filial", controller.listar);

export default router;