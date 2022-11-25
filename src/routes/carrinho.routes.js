import { Router } from "express";
import { getCarrinho } from "../controllers/user.controllers.js";

const router = Router();

router.post("/get", getCarrinho);


export default router;