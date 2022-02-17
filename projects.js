const projects = [
  {
    name: "Recipe Cloud",
    slug: "recipecloud",
    desc: "Take your old recipe book, mix in the internet, and add a splash of social media. What do you get? Recipe Cloud. The one stop spot to store and find new recipes.",
    about:
      "This project was inspired by my girlfriends delapitated recipe book.  This was my first full stack project and helped me learn node, express, and mongoose. /n/nWith Recipe Cloud you can store your recipes as well as explore the recipes of other users. Easily keep track of any recipes you like and leave comments on others recipes to let them know how you liked it.",
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
    about:
      "Anyone whos run a Dungeons and Dragons game knows balancing encounters can be a real pain.  The guides provided require a number or tables and random calculations, enough to make your head spin.  Enter the encounter buddy to do all that confusing work for you. /n/nThe first step of this project involved building a web scraper with Puppeteer to build the monster data base. Next came an api full of complicated logic to generate the desired encounter. Finally, a nice polished interface to display it all in.",
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
    about:
      "While learning to code i worked in the dairy department of a grocery store.  Our milk inventory and orders involved printing and order form, counting all the milk on the shelf, counting all the crates in the cooler, mathing it all together, then entering all this data on the computer to submit.  /n/nThe Milk Master 9000 has cut the time of this process by 75%.  Simply log in on your phone, enter the milk on the shelves and the number of crates and hit submit.  All the math is handled and a Puppeteer webscraper on the server side navigates the milk companies website, fills out and submits the form, and sends you back a screen shot of the confirmation.",
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
    about:
      "My uncle is a freelance graphic designer with a website that was very out of date.  I saw this as a great oppurtunity to help him and practice my trade. /n/nThis project was my first work with intersection observers and taught me a great deal for working with animation and layout.",
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
    about:
      "I've always been a huge fan of puzzles, strategy games, and anything involving logical deduction.  Mastermind is a game i loved as a kid and had a blast recreating (and playing).",
    live: "https://master-mind-game.netlify.app/",
    code: "https://github.com/misqke/master-mind",
    tech: ["react", "sass"],
    img: "/imgs/mastermind.jpg",
    heroku: false,
  },
];

module.exports = { projects };
