export const techStacks = [
  {
    id: 1,
    icon: {
      url: "./src/assets/images/skill-icons/html-5.svg",
      alt: "icon html",
    },
  },
  {
    id: 2,
    icon: {
      url: "./src/assets/images/skill-icons/css-3.svg",
      alt: "icon css",
    },
  },
  {
    id: 3,
    icon: {
      url: "./src/assets/images/skill-icons/tailwind.svg",
      alt: "icon tailwind",
    },
  },
  {
    id: 4,
    icon: {
      url: "./src/assets/images/skill-icons/javascript.svg",
      alt: "icon javaScript",
    },
  },
  {
    id: 5,
    icon: {
      url: "./src/assets/images/skill-icons/react.svg",
      alt: "icon react",
    },
  },
  {
    id: 6,
    icon: {
      url: "./src/assets/images/skill-icons/node-js.svg",
      alt: "icon Node.js",
    },
  },
  {
    id: 7,
    icon: {
      url: "./src/assets/images/skill-icons/express.svg",
      alt: "icon express",
    },
  },
  {
    id: 8,
    icon: {
      url: "./src/assets/images/skill-icons/mongo.svg",
      alt: "icon mongo db",
    },
  },
  {
    id: 9,
    icon: {
      url: "./src/assets/images/skill-icons/figma.svg",
      alt: "icon figma",
    },
  },
  {
    id: 10,
    icon: {
      url: "./src/assets/images/skill-icons/git.svg",
      alt: "icon git",
    },
  },
  {
    id: 11,
    icon: {
      url: "./src/assets/images/skill-icons/vs-code.svg",
      alt: "icon vs cdoe",
    },
  },
  {
    id: 12,
    icon: {
      url: "./src/assets/images/skill-icons/vite.svg",
      alt: "icon vite",
    },
  },
];

const halfLength = Math.floor(techStacks.length / 2);
// created array from first half of tech stacks array.
export const firstHalf = techStacks.slice(0, halfLength);
// created array from  second half of tech stacks array.
export const secondHalf = techStacks.slice(halfLength);
