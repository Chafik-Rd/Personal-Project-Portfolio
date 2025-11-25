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
    <div id="allProjects" className="bg-white px-6 py-10 lg:px-12">
      {/* change page with navigate and send state to next page */}
      <p
        onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
        className="flex cursor-pointer gap-1 text-base sm:text-lg"
      >
        <ArrowLeft strokeWidth={1.5} />
        Back to home
      </p>

      <div className="flex flex-col items-center gap-14">
        <PageHeader
          header={"Projects"}
          text={
            "Here are some of the projects I've worked on, showcasing my skills in frontend development"
          }
        />
        <div className="flex flex-col flex-wrap justify-between gap-6 md:flex-row">
          {projects
            .sort((a, b) => b.id - a.id)
            .map((project) => {
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
      </div>
    </div>
  );
};
