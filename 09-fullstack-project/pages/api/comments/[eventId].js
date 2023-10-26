// /api/comments/some-event-id

function handler(req, res) {
  //the property on the query must match the name of the file (in square brackets)
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(
      "email",
      email,
      "name",
      name,
      "text",
      text,
      "\n",
      "newComment",
      newComment,
    );
    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Bryan",

        text: "This is a first comment",
      },
      {
        id: "c2",
        name: "Max",
        text: "This is a second comment",
      },
    ];
    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
