import clientPromise from "../../lib/mongodb";

const dbName = process.env.DB_NAME;
export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db(dbName);

  const events = await db.collection("events").find({}).sort({ metacritic: -1 }).toArray();

  res.json(events);
};
