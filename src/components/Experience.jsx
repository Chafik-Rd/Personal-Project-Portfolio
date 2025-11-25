import { ExperienceCard } from "./ExperienceCard";
import { PageHeader } from "./PageHeader";
import { Building, GraduationCap } from "lucide-react";
import { experience, education } from "../data/experienceEducation";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center gap-14 bg-white px-6 py-16 lg:px-12"
    >
      <PageHeader
        header={"Experience & Education"}
        text={"My professional journey and educational background"}
      />

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Experience */}
        <section className="w-full">
          <div className="flex items-center gap-2">
            <Building size={28} className="text-mutedBlue-300" />
            <h3 className="text-xl font-medium sm:text-2xl md:text-3xl">
              Experience
            </h3>
          </div>
          <div className="flex h-full flex-col gap-3">
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
            <h3 className="text-xl font-medium sm:text-2xl md:text-3xl">
              Education
            </h3>
          </div>
          <div className="flex h-full flex-col gap-3">
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
