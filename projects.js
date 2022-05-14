const projects = [
  {
    name: "Recipe Cloud",
    slug: "recipecloud",
    desc: "A full stack recipe website.",
    about: [
      "This project was inspired by my girlfriend's delapitated recipe book.  This was my first full stack project and helped me learn node, express, and mongoose.",
      "With Recipe Cloud you can store your recipes as well as explore the recipes of other users. Easily keep track of any recipes you like and leave comments on others recipes to let them know how you liked it.",
    ],
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
      "cloudinary",
    ],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559425/portfolio/fw6twbljcpyvcujffbpr.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/pokcorwjhlc8nuhg3mid.jpg",
    },
    heroku: true,
  },
  {
    name: "Pokedex",
    slug: "pokedex",
    desc: "A full stack clone of pokemon.com/pokedex.",
    about: [
      "Who doesn't love Pokemon?  When it came to picking a website to clone, this was an easy first choice.",
      "This project's back end was made with Express.  I built a web scraper to gather all the needed information from the real site and an api to serve, filter, and sort the data as needed.",
      "The front end was made in Next.js and styled with SCSS.",
    ],
    live: "https://misqke-pokedex.netlify.app/",
    code: "https://github.com/misqke/pokedex",
    backend: "https://github.com/misqke/pokemon-api",
    tech: ["react", "sass", "next.js", "node", "express"],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559425/portfolio/yoxajzd8cfo8h8xf0p4t.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/eg69xtyhupgd1ujk73bu.jpg",
    },
    heroku: false,
  },
  {
    name: "Introspective Images",
    slug: "introspectiveimages",
    desc: "A full stack portfolio website for a freelance photographer.",
    about: [
      "I built this site for a coworker who does some freelance photopgraphy work.",
      "This project was built in Next.js, using Cloudinary for image storage and MongoDB for content management.  It includes an admin page, using JWT authentication, where the photographer can update the cover photo, add or remove gallery images, and update image tags and captions.",
    ],
    live: "https://introspective-images.vercel.app/",
    code: "https://github.com/misqke/introspective_images",
    tech: ["react", "sass", "next.js", "mongoose", "JWT", "cloudinary"],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559420/portfolio/ijy09q6xnf4vulatoy4f.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/kz3p0wcgx2mnlo6mrxpt.jpg",
    },
    heroku: false,
  },
  {
    name: "Special Forces Art Department",
    slug: "specialforcesartdepartment",
    desc: "A business / portfolio website for a freelance graphic designer.",
    about: [
      "My uncle is a freelance graphic designer with a website that was very out of date.  I saw this as a great opportunity to help him and practice my trade.",
      "This project was my first experience working with intersection observers and with a client.  I learned a great deal about adapting a project based on a clients needs and feedback.",
    ],
    live: "https://graphicdesignerpa.netlify.app/",
    code: "https://github.com/misqke/special-forces-art-department",
    tech: ["react", "sass", "next.js"],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559425/portfolio/vx1wpuw39tt0ump0dtd3.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581104/portfolio/msh20eypi7il1y4aubcv.jpg",
    },
    heroku: false,
  },
  {
    name: "Encounter Buddy",
    slug: "encounterbuddy",
    desc: "An encounter generator and monster compendium for D&D 5e SRD content.",
    about: [
      "Anyone who's run a Dungeons and Dragons game knows balancing encounters can be a real pain.  The guides provided require a number or tables and random calculations, enough to make your head spin.  Enter the encounter buddy to do all that confusing work for you.",
      "The first step of this project involved building a web scraper with Puppeteer to build the monster data base. Next came an api full of complicated logic to generate the desired encounter. Finally, I created a nice, polished interface to display it all in.",
    ],
    live: "https://encounter-buddy.netlify.app/",
    code: "https://github.com/misqke/encounter_buddy",
    tech: ["react", "redux", "sass", "next.js"],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559412/portfolio/drv14cjj4ezzhkxc6zic.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581075/portfolio/dpcjyaiyfu1oeocwkp0v.jpg",
    },
    heroku: false,
  },
  {
    name: "Milk Master",
    slug: "milkmaster",
    desc: "A web scraping application to simplify milk inventory and ordering.",
    about: [
      "While learning to code, I worked in the dairy department of a grocery store.  Our milk inventory and orders involved printing an order form, counting all the milk on the shelf, counting all the crates in the cooler, mathing it all together, then entering all this data on the computer to submit.",
      "The Milk Master has cut the time of this process by 75%.  Simply log in on your mobile device, enter the amount of milk on the shelves and the number of crates and hit submit.  All the math is handled, and a Puppeteer webscraper on the server side navigates the milk company's website, fills out and submits the form, and sends you back a screen shot of the confirmation.",
    ],
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
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559425/portfolio/swythnp7d0vxyiu1axzy.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559567/portfolio/xvdiesh7sziuajdjkmvz.jpg",
    },
    heroku: true,
  },
];

module.exports = { projects };
