import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//
import { MongoClient } from "mongodb";

const app = express();

app.use(express.json());
app.use(cors());

//Para testar a conexão com o banco de dados



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));
