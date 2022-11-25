import { booksCollection, carrinhoCollection } from "../database/db.js";

export async function addBookCarrinho(req, res) {
    const bookCarrinho = res.locals.bookCarrinho;
  
    try {
      await carrinhoCollection.insertOne( bookCarrinho );
      res.status(201).send("livro enviado para carrinho!");
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }


export async function getBookCarrinho(req, res) {
   
  try {
     
    const livrosCarrinho = await carrinhoCollection.find().toArray();
    res.send(livrosCarrinho);

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
