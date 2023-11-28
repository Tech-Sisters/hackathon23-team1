import clientPromise from "../../lib/mongodb";
//needs to be deleted
const dbName = process.env.DB_NAME;
export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db(dbName);

  if (req.method === "POST") {
    try {
      const { fullName, email, password, country } = req.body;
      console.log(req.body.email);
      const user = await db.collection("users").insertOne({
        fullName,
        email,
        password,
        country,
      });

      res.json(user);
    } catch (err) {
      console.error(err);
      throw new Error(err).message;
    }
  }
};
