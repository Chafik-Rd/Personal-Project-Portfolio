import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { PageHeader } from "../components/PageHeader";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";

export const AllProjects = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <div id="allProjects" className="py-10 px-6 lg:px-12 bg-white">
      {/* change page with navigate and send state to next page */}
      <p
        onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
        className="flex gap-1 text-base sm:text-lg cursor-pointer"
      >
        <ArrowLeft strokeWidth={1.5} />
        Back to home
      </p>

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
