import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { PageHeader } from "../components/PageHeader";
export const AllProjects = () => {
  return (
    <div id="projects" className="py-10 px-4 lg:px-12 bg-white">
      <Link to="/">
        <p className="flex gap-1 text-lg ml-10">
          <ArrowLeft strokeWidth={1.5} />
          Back to home
        </p>
      </Link>
      <div className="flex flex-col gap-14 items-center">
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
                key={project.id}
                img={project.img}
                name={project.name}
                detail={project.detail}
                tags={project.techStacks}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
