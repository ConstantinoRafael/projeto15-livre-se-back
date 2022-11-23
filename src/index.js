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
const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("livre-se");

app.post("/teste", async (req, res) => {
  try {
    const testeBody = req.body;
    await db.collection("testebanco").insertOne(testeBody);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
});

app.get("/teste", async (req, res) => {
  try {
    const testes = await db.collection("teste-banco").find().toArray();
    res.send(testes);
  } catch (err) {
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));
