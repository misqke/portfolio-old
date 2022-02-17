const { projects } = require("../../projects");

export default function handler(req, res) {
  const { slug } = req.query;
  if (req.method === "GET") {
    if (slug) {
      try {
        const project = projects.find((project) => project.slug === slug);
        res.status(200).json({ project });
      } catch (error) {
        res.status(400).json({ msg: "This project doesn't exist." });
      }
    } else {
      return res.status(200).json({ projects });
    }
  } else {
    res.status(500).json({ msg: "Invalid request method" });
  }
}
