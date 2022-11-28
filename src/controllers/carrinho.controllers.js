import { carrinhoCollection } from "../database/db.js";

export async function addBookCarrinho(req, res) {
    const {title, image, price} = req.body
  
    const message = {
      title,
      image,
      price
    };
    try {
      await carrinhoCollection.insertOne( message );
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

export async function deleteBookCarrinho(req, res) {
   
  try {
    
    await carrinhoCollection.deleteOne({_id: req.params.id})
    res.status(201).send("livro deletado")
    

  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
