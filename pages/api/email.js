export default function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;
    res.status(200).json({ formData });
  } else {
    res.status(500).json({ msg: "Invalid request method" });
  }
}
