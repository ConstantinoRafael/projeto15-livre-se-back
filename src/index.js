import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.routes.js"
import bookRoutes from "./routes/book.routes.js"
import carrinhoRoutes from "./routes/carrinho.routes.js"


const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(bookRoutes);
app.use(carrinhoRoutes);




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));
