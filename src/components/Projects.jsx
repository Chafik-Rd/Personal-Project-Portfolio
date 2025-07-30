import { PageHeader } from "./PageHeader";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  const projects = [
    {
      id: 4,
      img: {
        url: "./src/assets/images/web-portfolio.png",
        alt: "web portfolio",
      },
      name: "LeftoverChef ",
      detail: "",
      tags: ["Ract", "TailwindCSS", "JavaScript", "Vite"],
    },
    {
      id: 3,
      img: {
        url: "./src/assets/images/web-portfolio.png",
        alt: "web portfolio",
      },
      name: "web portfolio",
      detail: "",
      tags: ["Ract", "TailwindCSS", "JavaScript", "Vite"],
    },
    {
      id: 2,
      img: {
        url: "./src/assets/images/web-portfolio-v1.png",
        alt: "web portfolio",
      },
      name: "web portfolio v.1",
      detail: "",
      tags: ["Ract", "TailwindCSS", "JavaScript", "Vite"],
    },
    {
      id: 1,
      img: { url: "./src/assets/images/web-pokemon.png", alt: "web pokemon" },
      name: "web pokemon API",
      detail: "",
      tags:["Ract","TailwindCSS","JavaScript","Vite"]
    },
  ];
  return (
    <div className="min-h-[calc(100vh-68px)] py-16 px-4 lg:px-12 bg-softWhite flex flex-col gap-14 items-center">
      <PageHeader
        header={"Projects"}
        text={
          "Here are some of the projects I've worked on, showcasing my skills in frontend development"
        }
      />
      <div className="flex flex-col md:flex-row gap-6 justify-between flex-wrap">
        {projects.map((project) => {
          return (
            <ProjectCard
              img={project.img}
              name={project.name}
              detail={project.detail}
              tags={project.tags}
            />
          );
        })}
      </div>
    </div>
  );
};
