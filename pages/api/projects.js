const projects = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { name } = req.query;
    if (name) {
      try {
        const project = projects.find((project) => project.name === name);
        return res.status(200).json({ project });
      } catch (error) {
        return res.status(400).json({ msg: "This project doesn't exist." });
      }
    } else {
      return res.status(200).json({ projects: projects });
    }
  } else {
    return res.status(500).json({ msg: "Invalid request method" });
  }
}
