// creates a route to /api/contact to which we can make requests.

function handler(req, res) {
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
    console.log(newMessage);
    res.status(201).json({ message: "Sucessfully stored message", message: newMessage });
  }
}

export default handler;
