import { Router } from "express";
import { DepartamentoController } from "../controller/departamentoController";

const router = Router();
const controller = new DepartamentoController();

router.get("/departamento", controller.listar);

export default router;