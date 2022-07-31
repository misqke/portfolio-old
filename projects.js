const web = [
  {
    name: "Recipe Cloud",
    slug: "recipecloud",
    desc: "A MERN stack recipe website featuring full CRUD operations, authentication, and more. This was my first go at full-stack development.",
    live: "https://misqke-recipe-cloud.herokuapp.com/",
    code: "https://github.com/misqke/recipe-cloud",
    tech: ["React", "Redux", "Bootstrap", "Express", "JWT", "MongoDB"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/pokcorwjhlc8nuhg3mid.jpg",

    heroku: true,
  },
  {
    name: "Pokedex",
    slug: "pokedex",
    desc: "A front-end clone of the Pokedex page on Pokemon.com. I built a web scraper to gather data from the real site and an API to serve it with Express.",
    live: "https://misqke-pokedex.netlify.app/",
    code: "https://github.com/misqke/pokedex",
    backend: "https://github.com/misqke/pokemon-api",
    tech: ["React", "SASS", "Next", "Node", "Express"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/eg69xtyhupgd1ujk73bu.jpg",

    heroku: false,
  },
  {
    name: "Introspective Images",
    slug: "introspectiveimages",
    desc: "A full-stack portfolio website for a freelance photographer, built in Next.JS.  Includes admin page for content management.",
    live: "https://introspective-images.vercel.app/",
    code: "https://github.com/misqke/introspective_images",
    tech: ["React", "Styled Components", "Next", "MongoDB", "JWT"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/kz3p0wcgx2mnlo6mrxpt.jpg",

    heroku: false,
  },

  {
    name: "Milk Master",
    slug: "milkmaster",
    desc: "A MERN stack, web scraping application I built to simplify the tedious tasks of milk inventory and ordering. The Milk Master has reduced the time these tasks take by 75%.",
    live: "https://milk-master-demo.herokuapp.com/",
    code: "https://github.com/misqke/milk-master-demo",
    tech: ["React", "Node", "Express", "Puppeteer"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559567/portfolio/xvdiesh7sziuajdjkmvz.jpg",

    heroku: true,
  },
  {
    name: "Special Forces Art Department",
    slug: "specialforcesartdepartment",
    desc: "A business / portfolio website for a freelance graphic designer, built with Next.JS.",
    live: "https://graphicdesignerpa.netlify.app/",
    code: "https://github.com/misqke/special-forces-art-department",
    tech: ["React", "SASS", "Next"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581104/portfolio/msh20eypi7il1y4aubcv.jpg",
    heroku: false,
  },
  {
    name: "NoPixel Hacking",
    slug: "nopixelhacking",
    desc: "My recreation of the hacking mini-game used on the NoPixel GTA roleplaying server.",
    live: "https://nopixelhacking.netlify.app/",
    code: "https://github.com/misqke/noPixelHackingGame",
    tech: ["React", "Styled Components"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1659295624/portfolio/eppnb4i9pretf2bvdimt.jpg",

    heroku: false,
  },
];

const mobile = [
  {
    name: "Mastermind",
    slug: "mastermind",
    desc: "A front-end code-cracking game and my first crack into mobile development.",
    live: "https://expo.dev/@misqke/mastermind_mobile?serviceType=classic&distribution=expo-go",
    code: "https://github.com/misqke/mastermind_mobile",
    tech: ["React Native", "Expo", "React Navigation"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1656600474/portfolio/ixeibslx7thb9aej1gih.png",
    heroku: false,
  },
  {
    name: "Recipe Cloud",
    slug: "recipecloudmobile",
    desc: "A mobile application for my web app by the same name. Features full CRUD operations.",
    live: "https://expo.dev/@misqke/recipeCloud_mobile?serviceType=classic&distribution=expo-go",
    code: "https://github.com/misqke/recipeCloud_mobile",
    tech: ["React Native", "Expo", "React Navigation", "Redux", "Secure Store"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1656600476/portfolio/ox9imgzpebxqjbl8ddly.png",
    heroku: true,
  },
  {
    name: "Pokedex",
    slug: "pokedexmobile",
    desc: "A mobile Pokedex application. I used the back-end I had built for my Pokedex web application clone, but put my own spin on the front-end design in this mobile version.",
    live: "https://expo.dev/@misqke/pokedex_mobile?serviceType=classic&distribution=expo-go",
    code: "https://github.com/misqke/pokedex_mobile",
    tech: ["React Native", "Expo", "React Navigation", "Reanimated"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1656600474/portfolio/qr7xitnn2aml3602vosp.png",
    heroku: true,
  },
];

module.exports = { web, mobile };
