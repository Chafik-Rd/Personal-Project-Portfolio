import { PageHeader } from "./PageHeader";
import { techStacks, firstHalf, secondHalf } from "../data/techStacks";
import { SkillCard } from "./SkillCard";
export const Skills = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-softWhite flex flex-col gap-14 items-center">
      <PageHeader header={"Tech Stack"} />

      {/* animation scroll one line */}
      <div className="w-screen overflow-hidden hidden md:flex flex-col">
        <ul className="flex w-fit animate-scroll">
          {[...techStacks, ...techStacks].map((techStack) => (
            <SkillCard key={techStack.id} icon={techStack.icon} />
          ))}
        </ul>
      </div>

      {/* animation scroll two line */}
      <div className="w-screen overflow-hidden flex md:hidden flex-col">
        <ul className="flex w-fit animate-scroll">
          {[...firstHalf, ...firstHalf].map((techStack) => (
            <SkillCard key={techStack.id} icon={techStack.icon} />
          ))}
        </ul>
        <ul className="flex w-fit animate-scroll-black">
          {[...secondHalf, ...secondHalf].map((techStack) => (
            <SkillCard key={techStack.id} icon={techStack.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};
