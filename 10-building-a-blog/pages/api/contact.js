// creates a route to /api/contact to which we can make requests.
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
      res.status(422).json({ message: "invalid input" });
      return;
    }
    // store it in a database...
    const newMessage = {
      name,
      email,
      message
    };
    let client;
    try {
      client = await MongoClient.connect("mongodb+srv://bgoonz:Ruletheweb2023!@cluster0.0iuhycm.mongodb.net/my-site?retryWrites=true&w=majority&appName=Cluster0");
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }
    const db = client.db()
    
    
    
    res.status(201).json({ message: "Sucessfully stored message", message: newMessage });
  }
}

export default handler;
