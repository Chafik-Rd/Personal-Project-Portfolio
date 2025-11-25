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
      className="flex flex-col items-center gap-14 bg-white px-6 py-16 lg:px-12"
    >
      <PageHeader
        header={"Projects"}
        text={
          "Here are some of the projects I've worked on, showcasing my skills in full stack development"
        }
      />
      {/* project card */}
      <div className="flex flex-col flex-wrap justify-between gap-6 md:flex-row">
        {projects
          .sort((a, b) => b.id - a.id)
          .filter((project) => project.pin === true)
          .map((project) => {
            return (
              <ProjectCard
                key={project.id}
                img={project?.img}
                name={project.name}
                detail={project.detail}
                tags={project.techStacks}
                webDemo={project?.webDemo}
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
        className="text-mutedBlue-300 animate-bounce text-xl"
      >
        <ArrowDown strokeWidth={1.5} className="size-5" />
        See more
      </Button>
    </div>
  );
};
