import { PageHeader } from "./PageHeader";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { projects } from "../data/projects";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";

export const Project = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // get state from before page and scroll
  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location]);

  return (
    <div
      id="projects"
      className="py-16 px-6 lg:px-12 bg-white flex flex-col gap-14 items-center"
    >
      <PageHeader
        header={"Projects"}
        text={
          "Here are some of the projects I've worked on, showcasing my skills in full stack development"
        }
      />
      {/* project card */}
      <div className="flex flex-col md:flex-row gap-6 justify-between flex-wrap">
        {projects.slice(0, 4).map((project) => {
          return (
            <ProjectCard
              key={project.id}
              img={project.img}
              name={project.name}
              detail={project.detail}
              tags={project.techStacks}
              webDemo={project.webDemo}
              gitHub={project.gitHub}
            />
          );
        })}
      </div>

      {/* change page with navigate and send state to next page */}
      <Button
        onClick={() =>
          navigate("allproject", { state: { scrollTo: "allProjects" } })
        }
        size="lg"
        variant="outline"
        className="text-xl text-mutedBlue-300 animate-bounce"
      >
        <ArrowDown strokeWidth={1.5} className="size-5" />
        See more
      </Button>
    </div>
  );
};
