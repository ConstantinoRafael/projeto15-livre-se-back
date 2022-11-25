import { booksCollection } from "../database/db.js";

export async function addBook(req, res) {
  const book = res.locals.book;

  try {
    await booksCollection.insertOne( book );
    res.status(201).send("livro cadastrado!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findBooks(req, res) {
  const user = res.locals.user;
  
  try {
    const books = await booksCollection.find().toArray();
    
    delete user.password;
    res.send({books, user});
  
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }

}
