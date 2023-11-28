import clientPromise from "@/lib/mongodb";
import { hash } from "bcryptjs";

const dbName = process.env.DB_NAME;
export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db(dbName);
  if (req.method === "POST") {
    try {
      const { name, email, password, country } = req.body;
      console.log(req.body.name);
      if (!email || !email.includes("@") || !password) {
        res.status(422).json({ message: "Invalid Data" });
        return;
      }
      const checkExisting = await db.collection("users").findOne({ email: email });
      if (checkExisting) {
        res.status(422).json({ message: "User already exists" });
        client.close();
        return;
      }
      const status = await db.collection("users").insertOne({
        email,
        password: await hash(password, 12),
        name,
        country,
      });
      //Send success response
      res.status(201).json({ message: "User created", ...status });
      client.close();
    } catch (err) {
      console.error(err);
      throw new Error(err).message;
    }
  } else {
    //Response for other than POST method
    res.status(500).json({ message: "Route not valid" });
  }
};
