const projects = [
  {
    name: "Recipe Cloud",
    slug: "recipecloud",
    desc: "A full stack recipe website. Explore recipes or sign up to upload your own.",
    live: "https://misqke-recipe-cloud.herokuapp.com/",
    code: "https://github.com/misqke/recipe-cloud",
    tech: ["react", "redux", "bootstrap", "express", "jwt", "mongoose"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/pokcorwjhlc8nuhg3mid.jpg",

    heroku: true,
  },
  {
    name: "Pokedex",
    slug: "pokedex",
    desc: "A full stack clone of the Pokedex page on pokemon.com",
    live: "https://misqke-pokedex.netlify.app/",
    code: "https://github.com/misqke/pokedex",
    backend: "https://github.com/misqke/pokemon-api",
    tech: ["react", "sass", "next", "node", "express"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/eg69xtyhupgd1ujk73bu.jpg",

    heroku: false,
  },
  {
    name: "Introspective Images",
    slug: "introspectiveimages",
    desc: "A full stack portfolio website for a freelance photographer, including admin dashboard.",
    live: "https://introspective-images.vercel.app/",
    code: "https://github.com/misqke/introspective_images",
    tech: ["react", "sass", "next", "mongoose", "jwt"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/kz3p0wcgx2mnlo6mrxpt.jpg",

    heroku: false,
  },

  {
    name: "Milk Master",
    slug: "milkmaster",
    desc: "A web scraping application to simplify milk inventory and ordering.",
    live: "https://milk-master-demo.herokuapp.com/",
    code: "https://github.com/misqke/milk-master-demo",
    tech: ["react", "node", "express", "puppeteer"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559567/portfolio/xvdiesh7sziuajdjkmvz.jpg",

    heroku: true,
  },
  {
    name: "Special Forces Art Department",
    slug: "specialforcesartdepartment",
    desc: "A business / portfolio website for a freelance graphic designer.",
    live: "https://graphicdesignerpa.netlify.app/",
    code: "https://github.com/misqke/special-forces-art-department",
    tech: ["react", "sass", "next"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581104/portfolio/msh20eypi7il1y4aubcv.jpg",
    heroku: false,
  },
  {
    name: "Encounter Buddy",
    slug: "encounterbuddy",
    desc: "An encounter generator and monster compendium for D&D 5e SRD content.",
    live: "https://encounter-buddy.netlify.app/",
    code: "https://github.com/misqke/encounter_buddy",
    tech: ["react", "redux", "sass", "next"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581075/portfolio/dpcjyaiyfu1oeocwkp0v.jpg",

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
    tech: ["react native", "expo", "react navigation"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1656600474/portfolio/ixeibslx7thb9aej1gih.png",
    heroku: false,
  },
  {
    name: "Recipe Cloud",
    slug: "recipecloudmobile",
    desc: "A mobile application for my web app by the same name.",
    live: "https://expo.dev/@misqke/recipeCloud_mobile?serviceType=classic&distribution=expo-go",
    code: "https://github.com/misqke/recipeCloud_mobile",
    tech: ["react native", "expo", "react navigation", "redux", "secure store"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1656600476/portfolio/ox9imgzpebxqjbl8ddly.png",
    heroku: true,
  },
  {
    name: "Pokedex",
    slug: "pokedexmobile",
    desc: "A mobile Pokedex containing basic information on every Pokemon.",
    live: "https://expo.dev/@misqke/pokedex_mobile?serviceType=classic&distribution=expo-go",
    code: "https://github.com/misqke/pokedex_mobile",
    tech: ["react native", "expo", "react navigation", "reanimated"],
    img: "https://res.cloudinary.com/dkhxk06gf/image/upload/v1656600474/portfolio/qr7xitnn2aml3602vosp.png",
    heroku: true,
  },
];

module.exports = { projects, mobile };
