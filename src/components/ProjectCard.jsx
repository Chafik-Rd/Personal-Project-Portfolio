import { Tag } from "./Tag";
import { Button } from "@/components/ui/button";
import { Globe, Github } from "lucide-react";

export const ProjectCard = ({ img, name, detail, tags, webDemo, gitHub }) => {
  return (
    <div className="max-w-150 w-full bg-white rounded-xl shadow-md mx-auto hover:shadow-xl">
      <div className="sm:h-48 w-full overflow-hidden">
        <img src={img.url} alt={img.alt} className="rounded-t-xl w-full" />
      </div>

      <div className="py-6 px-6 sm:px-8 flex flex-col gap-5">
        <h3 className="text-xl font-medium capitalize">{name}</h3>
        <p className="text-mutedBlueGray hidden md:block">{detail}</p>
        <div className="flex gap-3 flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="flex gap-3 sm:gap-8 justify-center sm:justify-end">
          {webDemo !== "" && (
            <a href={webDemo} target="_blank" rel="noopener noreferrer">
              <Button size="md" className="text-base">
                <Globe strokeWidth={1.5} className="size-5" />
                Live Demo
              </Button>
            </a>
          )}
          {gitHub !== "" && (
            <a href={gitHub} target="_blank" rel="noopener noreferrer">
              <Button size="md" variant="outline" className="text-base">
                <Github strokeWidth={1.5} className="size-5" />
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
