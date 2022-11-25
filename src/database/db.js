import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("livre-se");
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const booksCollection = db.collection("books");