import { userSchema } from "../models/users.model.js";

export function userSchemaValidation(req, res, next) {
    const user = req.body;

    const {error} = userSchema.validate(user, {abortEarly: false})

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    res.locals.user = user;

    next();
}