import { bookSchema } from "../models/book.model.js";

export function bookSchemaValidation(req, res, next) {
  const book = req.body;

  const {error} = bookSchema.validate(book, {abortEarly: false});

  if(error) {
    const errors = error.details.map((details) => details.message);
    return res.status(400).send(errors);
  }

  res.locals.book = book;

  next();

}
