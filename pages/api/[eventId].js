import {
  connectDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";
async function handler(req, res) {
  const eventId = req.query.eventId;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to Database failed!" });
    return;
  }

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
      client.close();
      return;
    }
    const newComment = {
      // id: new Date().toISOString(),
      email,
      name,
      text,
      eventId,
    };

    let result;

    try {
      result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;
      res.status(201).json({ message: " Added Comment", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting Data failed!" });
    }
  }
  if (req.method === "GET") {
    // const dummyList = [
    //   {
    //     id: "c1",
    //     name: "mehdi",
    //     text: "First Comment",
    //   },
    //   {
    //     id: "c2",
    //     name: "Elnaz",
    //     text: "Second Comment",
    //   },
    // ];
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "GEtting comments failed! " });
    }
  }
  client.close();
}
export default handler;
