import { ExperienceCard } from "./ExperienceCard";
import { PageHeader } from "./PageHeader";
import { Building, GraduationCap } from "lucide-react";
import { experience, education } from "../data/experienceEducation";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="py-16 px-6 lg:px-12 bg-white flex flex-col gap-14 items-center"
    >
      <PageHeader
        header={"Experience & Education"}
        text={"My professional journey and educational background"}
      />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Experience */}
        <section className="w-full">
          <div className="flex items-center gap-2">
            <Building size={28} className="text-mutedBlue-300" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">
              Experience
            </h3>
          </div>
          <div className="flex flex-col gap-3 h-full">
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              name={item.jobPosition}
              tag={item.jobType}
              organization={item.company}
              date={item.date}
              location={item.location}
              detail={item.detail}
            />
          ))}
          </div>
        </section>

        {/* Education */}
        <section className="w-full">
          <div className="flex items-center gap-2">
            <GraduationCap size={28} className="text-mutedBlue-300" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium">Education</h3>
          </div>
          <div className="flex flex-col gap-3 h-full">
          {education.map((item) => (
            <ExperienceCard
              key={item.id}
              name={item.name}
              organization={item.institution}
              date={item.date}
              location={item.location}
              detail={item.detail}
            />
          ))}
          </div>
        </section>
      </div>
    </div>
  );
};
