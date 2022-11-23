import { Router } from "express";
import { signIn, signUp } from "../controllers/user.controllers.js";
import { userSchemaValidation } from "../middlewares/userValidation.middleware.js";

const router = Router();


router.post("/sign-up", userSchemaValidation, signUp)
router.post("/sign-in", signIn)

export default router;