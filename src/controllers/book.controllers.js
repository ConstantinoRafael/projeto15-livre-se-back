import { booksCollection } from "../database/db.js";

export async function addBook(req, res) {
  const book = res.locals.book;

  try {
    await booksCollection.insertOne(book);
    res.status(201).send("livro cadastrado!");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function findBooks(req, res) {
  try {
    const romanceBooks = await booksCollection
      .find({ genre: "romance" })
      .toArray();

    const misteryCrimeBooks = await booksCollection
      .find({ genre: "policial e suspense" })
      .toArray();

    const sciFiFantasyBooks = await booksCollection
      .find({ genre: "ficção científica e fantasia" })
      .toArray();

    const genresBooks = [
      { genre: "Romance", books: romanceBooks },
      { genre: "Policial e Supense", books: misteryCrimeBooks },
      { genre: "Ficção científica e Fantasia", books: sciFiFantasyBooks },
    ];

    res.send(genresBooks);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
