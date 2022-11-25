import { carrinhoCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export async function getCarrinho(req, res) {
   
  try {
     //ainda nao foi criado o collection livros
    //const livrosCarrinho = await db.collection("livros").find().toArray();
    //res.send(livrosCarrinho);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
