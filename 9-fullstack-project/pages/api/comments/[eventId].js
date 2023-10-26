// /api/comments/some-event-id
import { MongoClient } from "mongodb";

async function handler(req, res) {
  //the property on the query must match the name of the file (in square brackets)
  const eventId = req.query.eventId;

  const client = await MongoClient.connect("mongodb+srv://bgoonz:Summer2015@cluster0.wagx0yc.mongodb.net/events?retryWrites=true&w=majority");

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email.includes("@") || !name || name.trim() === "" || !text || text.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId
    };
    
    const db = client.db();
   const result = await db.collection('comments').insertOne(newComment);
    console.log(result);
    
    newComment.id = result.insertedId;
    
    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Bryan",

        text: "This is a first comment"
      },
      {
        id: "c2",
        name: "Max",
        text: "This is a second comment"
      }
    ];
    res.status(200).json({ comments: dummyList });
  }
  client.close();
}

export default handler;
