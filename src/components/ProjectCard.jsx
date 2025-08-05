import { Tag } from "./Tag";
import { Button } from "@/components/ui/button";
import { Globe, Github} from "lucide-react"

export const ProjectCard = ({ img, name, detail, tags}) => {
  return (
    <div className="max-w-150 w-full max-h-125 bg-white rounded-xl shadow-md mx-auto">
      <div className="h-48 w-full overflow-hidden">
        <img src={img.url} alt={img.alt} className="rounded-t-xl w-full" />
      </div>
      <div className="py-6 px-6 sm:px-8 flex flex-col gap-3">
        <h3 className="text-xl font-medium capitalize">{name}</h3>
        <p className="text-mutedBlueGray hidden md:block">{detail}</p>
        <div className="flex gap-3 w-70 overflow-hidden">
          {tags.map((tag,index) => {
            return <Tag key={index} text={tag} />;
          })}
        </div>
        <div className="flex gap-3 sm:gap-8 justify-center sm:justify-end">
          <Button size="md" className="text-base">
            <Globe strokeWidth={1.5} className="size-5" />
            Live Demo
          </Button>
          <Button size="md" variant="outline" className="text-base">
            <Github strokeWidth={1.5} className="size-5" />
            Code
          </Button>
        </div>
      </div>
    </div>
  );
};
