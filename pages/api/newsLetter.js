import {connectDatabase, insertDocument} from "../../helpers/db-util"

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    }

    // console.log(userEmail);
    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to Database failed!" });
      return;
    }

    try {
      await insertDocument(client,"newsLetter" ,{ email: userEmail });
    } catch (error) {
      res.status(500).json({ message: "Inserting Data failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}
export default handler;
