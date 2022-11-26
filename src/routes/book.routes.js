import { Router } from "express";
import { addBook, findBooks } from "../controllers/book.controllers.js";
import { bookSchemaValidation } from "../middlewares/bookValidation.middleware.js";
import { userRoutesValidation } from "../middlewares/userValidation.middleware.js";

const router = Router();

router.post("/books", bookSchemaValidation, addBook);
router.get("/books", findBooks);

export default router;
