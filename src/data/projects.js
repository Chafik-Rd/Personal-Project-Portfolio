export const projects = [
  {
    id: 1,
    name: "pokémon API (2024)",
    detail:
      "A practice project for fetching and displaying data from an external API (Pokémon API) with an interactive UI.",
    techStacks: ["React", "TailwindCSS", "FetchAPI"],
    img: {
      url: "./images/web-pokemon.png",
      alt: "web pokemon",
    },
    webDemo: "https://pokemon-chafik.netlify.app",
    gitHub: "https://github.com/Chafik-Rd/Personal-Project-Pokemon",
    pin: false,
  },
  {
    id: 2,
    name: "portfolio V.1 (2024)",
    detail:
      "The first version of my personal portfolio website, built with React and TailwindCSS to introduce myself and showcase my projects.",
    techStacks: ["React", "TailwindCSS"],
    img: {
      url: "./images/web-portfolio-v1.png",
      alt: "web portfolio V.1",
    },
    webDemo: "https://portfolio-chafik.netlify.app/",
    gitHub: "https://github.com/Chafik-Rd/Personal-Project-PortfolioV1",
    pin: false,
  },
  {
    id: 3,
    name: "portfolio (2025)",
    detail: `An updated version of my personal portfolio, built with React and enhanced with Shadcn UI for improved styling and design flexibility.`,
    techStacks: ["React", "TailwindCSS", "Shadcn"],
    img: {
      url: "./images/web-portfolio.png",
      alt: "web portfolio",
    },
    webDemo: "https://portfolio-chafik.vercel.app/",
    gitHub: "https://github.com/Chafik-Rd/Personal-Project-Portfolio",
    pin: true,
  },
  {
    id: 4,
    name: "DailyLean (2025)",
    detail: `Collaborated in a 5-member Agile team to build a MERN-based meal subscription platform, delivering a functional MVP in 3 sprints while enhancing my skills in teamwork, planning, and problem-solving.`,
    techStacks: ["React", "Express.js", "AxiosAPI", "MongoDB"],
    img: {
      url: "./images/web-dailyLean.png",
      alt: "web dailyLean",
    },
    webDemo: "https://front-end-final-project-cyan.vercel.app/",
    gitHub: "https://github.com/Chafik-Rd/Group-Project-DailyLean-FE",
    pin: true,
  },
  {
    id: 5,
    name: "LeftoverChef (Present)",
    detail: `A full-stack MERN application that helps manage fridge ingredients and suggests recipes.
    Developed from scratch, covering UX/UI design, database management, and API integration.`,
    techStacks: ["React", "Node.js", "AxiosAPI", "MongoDB"],
    img: {
      url: "./images/web-leftoverChef.png",
      alt: "web leftoverChef",
    },
    webDemo: "https://leftoverchef.vercel.app/",
    gitHub: "https://github.com/Chafik-Rd/Personal-Project-LeftoverChef",
    pin: true,
  },
  {
    id: 6,
    name: "Expense Trackr API (2025)",
    detail: `A RESTful API for personal expense tracking. It implements full CRUD operations for transactions and income. Features secure JWT Authentication and leverages Fastify and PostgreSQL for reliable data handling, utilizing Zod for strict input validation.`,
    techStacks: ["Fastify", "PostgreSQL", "TypeORM", "Zod","Docker"],
    // img: {
    //   url: "./images/web-leftoverChef.png",
    //   alt: "web leftoverChef",
    // },
    gitHub: "https://github.com/Chafik-Rd/expense-trackr-api",
    pin: true,
  },
];
