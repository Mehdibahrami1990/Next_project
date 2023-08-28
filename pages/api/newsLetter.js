import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }

    // console.log(userEmail);
    const client = await MongoClient.connect(
      "mongodb+srv://mehdiBa:bbnn21300@cluster0.bg6s64e.mongodb.net/events"
    );
    const db = client.db("events");
    await db.collection("newsLetter").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}
export default handler;
