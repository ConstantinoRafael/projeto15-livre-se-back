import { Router } from "express";
import { addBookCarrinho, deleteBookCarrinho, getBookCarrinho } from "../controllers/carrinho.controllers.js";


const router = Router();


router.get("/carrinho", getBookCarrinho);
router.post("/carrinho", addBookCarrinho);
<<<<<<< HEAD
router.delete("/carrinho/:id", deleteBookCarrinho)

=======
router.post("/carrinho/:id", deleteBookCarrinho);
>>>>>>> main

export default router;