import { MongoClient } from "mongodb";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://mehdiBa:bbnn21300@cluster0.bg6s64e.mongodb.net/events"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === " " ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newComment = {
      // id: new Date().toISOString(),
      email,
      name,
      text,
      eventId
    };

    const db = client.db("events");
    await db.collection("comments").insertOne(newComment);

    res.status(201).json({ message: " Added Comment", comment: newComment });
  }
  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "mehdi",
        text: "First Comment",
      },
      {
        id: "c2",
        name: "Elnaz",
        text: "Second Comment",
      },
    ];
    res.status(200).json({ comments: dummyList });
  }
  client.close();
}
export default handler;
