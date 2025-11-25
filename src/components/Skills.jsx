import { PageHeader } from "./PageHeader";
import { techStacks, firstHalf, secondHalf } from "../data/techStacks";
import { SkillCard } from "./SkillCard";
export const Skills = () => {
  return (
    <div
      id="techStack"
      className="bg-softWhite flex flex-col items-center gap-14 px-4 py-16 md:px-12"
    >
      <PageHeader header={"Tech Stack"} />

      {/* animation scroll one line */}
      <div className="hidden w-screen flex-col overflow-hidden md:flex">
        <ul className="animate-scroll flex w-fit">
          {[...techStacks, ...techStacks].map((techStack, index) => (
            <SkillCard key={index} icon={techStack.icon} />
          ))}
        </ul>
      </div>

      {/* animation scroll two line */}
      <div className="flex w-screen flex-col overflow-hidden md:hidden">
        <ul className="animate-scroll flex w-fit">
          {[...firstHalf, ...firstHalf].map((techStack, index) => (
            <SkillCard key={index} icon={techStack.icon} />
          ))}
        </ul>
        <ul className="animate-scroll-black flex w-fit">
          {[...secondHalf, ...secondHalf].map((techStack, index) => (
            <SkillCard key={index} icon={techStack.icon} />
          ))}
        </ul>
      </div>
    </div>
  );
};
