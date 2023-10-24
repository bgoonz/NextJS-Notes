function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;
  }
  res.status(200).json({ message: "This works!" });
}

export default handler;
