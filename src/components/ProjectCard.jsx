import { Tag } from "./Tag";
import { Button } from "@/components/ui/button";
import { Globe, Github } from "lucide-react";

export const ProjectCard = ({ img, name, detail, tags, webDemo, gitHub }) => {
  return (
    <div className="mx-auto w-full max-w-150 rounded-xl border bg-white shadow-md hover:shadow-xl">
      {img !== undefined && (
        <div className="w-full overflow-hidden sm:h-48">
          <img src={img.url} alt={img.alt} className="w-full rounded-t-xl" />
        </div>
      )}

      <div className="flex flex-col gap-5 px-6 py-6 sm:px-8">
        <h3 className="text-xl font-medium capitalize">{name}</h3>
        <p
          className={`text-mutedBlueGray ${img !== undefined ? "hidden md:block" : "line-clamp-6 md:line-clamp-none"}`}
        >
          {detail}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
        <div className="flex justify-center gap-3 sm:justify-end sm:gap-8">
          {webDemo !== undefined && (
            <a href={webDemo} target="_blank" rel="noopener noreferrer">
              <Button size="md" className="text-base">
                <Globe strokeWidth={1.5} className="size-5" />
                Live Demo
              </Button>
            </a>
          )}
          {gitHub.trim() !== "" && (
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
