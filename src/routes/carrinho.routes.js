import { Router } from "express";
import { addBookCarrinho, deleteBookCarrinho, getBookCarrinho } from "../controllers/carrinho.controllers.js";


const router = Router();


router.get("/carrinho", getBookCarrinho);
router.post("/carrinho", addBookCarrinho);
router.post("/carrinho/:id", deleteBookCarrinho);

export default router;