import { PageHeader } from "./PageHeader";
import { SkillsCard } from "./SkillsCard";

export const Skills = () => {
  const skills = [
    {
      id: 1,
      header: "Frontend Development",
      icons: [
        {
          icon: {
            url: "./src/assets/images/skill-icons/html-5.svg",
            alt: "icon html",
          },
          name: "HTML",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/css-3.svg",
            alt: "icon css",
          },
          name: "CSS",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/tailwind.svg",
            alt: "icon tailwind",
          },
          name: "Tailwind CSS",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/javascript.svg",
            alt: "icon javaScript",
          },
          name: "JavaScript",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/react.svg",
            alt: "icon react",
          },
          name: "React",
        },
      ],
    },
    {
      id: 2,
      header: "Backend Development",
      icons: [
        {
          icon: {
            url: "./src/assets/images/skill-icons/node-js.svg",
            alt: "icon Node.js",
          },
          name: "Node.js",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/express.svg",
            alt: "icon express",
          },
          name: "Express",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/mongo.svg",
            alt: "icon mongo db",
          },
          name: "Mongo DB",
        },
      ],
    },
     {
      id: 3,
      header: "Tools",
      icons: [
        {
          icon: {
            url: "./src/assets/images/skill-icons/figma.svg",
            alt: "icon figma",
          },
          name: "Figma",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/git.svg",
            alt: "icon git",
          },
          name: "Git",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/vs-code.svg",
            alt: "icon vs cdoe",
          },
          name: "VS Code",
        },
        {
          icon: {
            url: "./src/assets/images/skill-icons/vite.svg",
            alt: "icon vite",
          },
          name: "Vite",
        },
      ],
    },
  ];
  
  return (
    <div className="min-h-[calc(100vh-68px)] py-16 px-4 md:px-12 bg-white flex flex-col gap-14 items-center">
      <PageHeader
        header={"Tech Stack"}
        text={
          "Here are the technologies and tools I work with to bring ideas to life"
        }
      />
      <div className="flex flex-col lg:flex-row gap-6 md:gap-3 justify-between w-full">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} header={skill.header} icons={skill.icons} />;
        })}
      </div>
    </div>
  );
};
