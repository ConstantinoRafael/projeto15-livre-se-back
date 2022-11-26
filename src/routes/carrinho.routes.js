import { Router } from "express";
import { addBookCarrinho } from "../controllers/carrinho.controllers.js";
import { getBookCarrinho } from "../controllers/carrinho.controllers.js";

const router = Router();


router.get("/carrinho", getBookCarrinho);
router.post("/carrinho", addBookCarrinho);


export default router;