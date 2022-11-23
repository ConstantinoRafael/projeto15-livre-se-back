import { usersCollection } from "../database/db.js";
import { userSchema } from "../models/users.model.js";
import bcrypt from "bcrypt";

export function userSchemaValidation(req, res, next) {
  const user = req.body;

  const { error } = userSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.user = user;

  next();
}

export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });
    if (!user) {
     return res.sendStatus(401);
    }
    const passwordOk = bcrypt.compareSync(password, user.password);
    if (!passwordOk) {
     return res.sendStatus(401);
    }

    res.locals.user = user;
  } catch {
    console.log(err);
    res.sendStatus(500);
  }
  next()
}
