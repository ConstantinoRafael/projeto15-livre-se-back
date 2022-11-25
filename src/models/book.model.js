import joi from "joi";

export const bookSchema = joi.object({
  title: joi.string().required(),
  image: joi.string().required(),
  genre: joi.string().required(),
  price: joi.number().required(),
  amount: joi.number().required(),
});
