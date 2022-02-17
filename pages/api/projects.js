const projects = [
  {
    name: "Recipe Cloud",
    slug: "recipecloud",
    desc: "Take your old recipe book, mix in the internet, and add a splash of social media. What do you get? Recipe Cloud. The one stop spot to store and find new recipes.",
    live: "https://misqke-recipe-cloud.herokuapp.com/",
    code: "https://github.com/misqke/recipe-cloud",
    tech: [
      "react",
      "react-router",
      "redux",
      "bootstrap",
      "node",
      "express",
      "JWT",
      "mongoose",
    ],
    img: "/imgs/recipeCloud.jpg",
    heroku: true,
  },
  {
    name: "Encounter Buddy",
    slug: "encounterbuddy",
    desc: "An encounter generator and monster compendium for D&D 5e SRD content.",
    live: "https://encounter-buddy.netlify.app/",
    code: "https://github.com/misqke/encounter_buddy",
    tech: ["react", "redux", "sass", "next.js"],
    img: "/imgs/encounterBuddy.jpg",
    heroku: false,
  },
  {
    name: "Milk Master 9000",
    slug: "milkmaster",
    desc: "A web scraping application to simplify milk inventory and ordering.",
    live: "https://milk-master-demo.herokuapp.com/",
    code: "https://github.com/misqke/milk-master-demo",
    tech: [
      "react",
      "react-router",
      "redux",
      "bootstrap",
      "node",
      "express",
      "mongoose",
      "JWT",
      "puppeteer",
    ],
    img: "/imgs/milkMaster.jpg",
    heroku: true,
  },
  {
    name: "Special Forces Art Department",
    slug: "specialforcesartdepartment",
    desc: "A business / portfolio website for a freelance graphic designer.",
    live: "https://graphicdesignerpa.netlify.app/",
    code: "https://github.com/misqke/special-forces-art-department",
    tech: ["react", "sass", "next.js"],
    img: "/imgs/specialForcesArt.jpg",
    heroku: false,
  },
  {
    name: "Mastermind",
    slug: "mastermind",
    desc: "My take on the classic code cracking game of the same name.",
    live: "https://master-mind-game.netlify.app/",
    code: "https://github.com/misqke/master-mind",
    tech: ["react", "sass"],
    img: "/imgs/mastermind.jpg",
    heroku: false,
  },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    const { slug } = req.query;
    if (slug) {
      try {
        const project = projects.find((project) => project.slug === slug);
        res.status(200).json({ project });
      } catch (error) {
        res.status(400).json({ msg: "This project doesn't exist." });
      }
    } else {
      res.status(200).json({ projects: projects });
    }
  } else {
    res.status(500).json({ msg: "Invalid request method" });
  }
}
