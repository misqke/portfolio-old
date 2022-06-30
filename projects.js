const projects = [
  {
    name: "Recipe Cloud",
    slug: "recipecloud",
    desc: "A full stack recipe website. Explore recipes or sign up to upload your own.",
    about: [
      "This project was inspired by my girlfriend's delapitated recipe book.  This was my first full stack project and helped me break in to back-end technologies.",
      "Users can create, update, and delete recipes, as well as favorite and comment on the recipes of others.  I used mongoDB for a database and used Node and Express to build out the server and api.  JWT is used for authentication on log in.",
      "The front-end of the project was built with React.  I used React Router for routing and navigation and Redux for state management.  Bootstrap and a bit of custom CSS was used for styling.",
    ],
    live: "https://misqke-recipe-cloud.herokuapp.com/",
    code: "https://github.com/misqke/recipe-cloud",
    tech: ["react", "redux", "bootstrap", "express", "jwt", "mongoose"],
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
    desc: "A full stack clone of the Pokedex page on pokemon.com",
    about: [
      "Who doesn't love Pokemon?  When it came to picking a website to clone, this was an easy first choice for me.",
      "I began this project by building a Puppeteer web scraper to crawl through pokemon.com/pokedex. This got me a JSON file with all the data I would need for the clone, formatted in a way I saw fit.",
      "The back-end of this project was built with Node and Express.  It includes a simple api to search Pokemon based on a variety of available filters or retrieve a list of random Pokemon.",
      "I built the front-end for this project with React. I used Next.js to take advantage of the built in dynamic routing features for the individual Pokemon detail pages.  The styling was all handled with Sass to match the original website's design.",
    ],
    live: "https://misqke-pokedex.netlify.app/",
    code: "https://github.com/misqke/pokedex",
    backend: "https://github.com/misqke/pokemon-api",
    tech: ["react", "sass", "next", "node", "express"],
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
    desc: "A full stack portfolio website for a freelance photographer, including admin dashboard.",
    about: [
      "I built this site for a coworker who does some freelance photopgraphy work.  It includes a full admin page to add or delete photos, update tags and captions, change the cover photo, and update the about section information.",
      "The full project was built in Next.js.  Utilizing Next's built in api, I was able to hook up a MongoDB database as well as JWT authentication for the admin dashboard.  Cloudinary was used for image storage and the project was styled with Sass.",
    ],
    live: "https://introspective-images.vercel.app/",
    code: "https://github.com/misqke/introspective_images",
    tech: ["react", "sass", "next", "mongoose", "jwt"],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559420/portfolio/ijy09q6xnf4vulatoy4f.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581126/portfolio/kz3p0wcgx2mnlo6mrxpt.jpg",
    },
    heroku: false,
  },

  {
    name: "Milk Master",
    slug: "milkmaster",
    desc: "A web scraping application to simplify milk inventory and ordering.",
    about: [
      "While learning to code, I worked in the dairy department of a grocery store.  Due to slow computers, poor websites, and a lot of math, milk inventories and orders were an hour long process.  The Milk Master has cut that time down to 15 minutes!",
      "The front-end of this project is a single page React application with Styled Components.  It is essentially a calculator geared towards a specific purpose.",
      "This application's magic all takes place in the back-end.  On page load, a Puppeteer web scraper crawls through the milk companies website, gathering a list of currently available products, and sending it off to the front-end.  After filling out the client-side form, a list of totals is sent back to the server and another web scraper runs through the milk companies website.  This time, it fills out the inventory or order form for you and sends back and image of the confirmation number.",
    ],
    live: "https://milk-master-demo.herokuapp.com/",
    code: "https://github.com/misqke/milk-master-demo",
    tech: ["react", "node", "express", "puppeteer"],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559425/portfolio/swythnp7d0vxyiu1axzy.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559567/portfolio/xvdiesh7sziuajdjkmvz.jpg",
    },
    heroku: true,
  },
  {
    name: "Special Forces Art Department",
    slug: "specialforcesartdepartment",
    desc: "A business / portfolio website for a freelance graphic designer.",
    about: [
      "My uncle is a freelance graphic designer with a website that was very out of date.  I saw this as a great opportunity to help him and practice my trade.",
      "This project was mostly a redesign, taking all the content from his original website and finding a better way to lay it out.  I used Next.js to take advantage of it&apos;s built in router and static site generation while still being able to use React.  The site was styled using Sass.",
      "I used this project as an opportunity to practice using JavaScript&apos;s intersetion observer for animation purposes.",
    ],
    live: "https://graphicdesignerpa.netlify.app/",
    code: "https://github.com/misqke/special-forces-art-department",
    tech: ["react", "sass", "next"],
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
      "To start this project I built a Puppeteer web scraper to gather all the needed monster data.  Using Next.js, I built out an api with a route to search monsters based on a variety of filters and, after a ton of crazy logic, a route to generate an encounter based on a variety of parameters.  Sass was used for styling and Redux was implemented to maintain generated encounter and search results when switching between pages.",
    ],
    live: "https://encounter-buddy.netlify.app/",
    code: "https://github.com/misqke/encounter_buddy",
    tech: ["react", "redux", "sass", "next"],
    img: {
      small:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1652559412/portfolio/drv14cjj4ezzhkxc6zic.jpg",
      large:
        "https://res.cloudinary.com/dkhxk06gf/image/upload/v1651581075/portfolio/dpcjyaiyfu1oeocwkp0v.jpg",
    },
    heroku: false,
  },
];

module.exports = { projects };
