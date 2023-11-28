import clientPromise from "../../lib/mongodb";

const dbName = process.env.DB_NAME;
export default async (req, res) => {
  const client = await clientPromise;
  const db = client.db(dbName);

  if (req.method === "POST") {
    try {
      const { name, place, country, time, description } = req.body;
      console.log(name);
      const event = await db.collection("events").insertOne({
        name,
        place,
        country,
        time,
        description,
        imageKey: "placeholder",
      });

      res.json(event);
    } catch (err) {
      console.error(err);
      throw new Error(err).message;
    }
  } else {
    const events = await db.collection("events").find({}).toArray();
    res.json(events);
  }
};
