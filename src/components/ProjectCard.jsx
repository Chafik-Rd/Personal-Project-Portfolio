import { Button } from "./Button";
import { Tag } from "./Tag";

export const ProjectCard = ({img, name, detail, tags}) => {
  return (
    <div className="max-w-150 min-w-90 w-full max-h-125 bg-white rounded-xl shadow-md mx-auto">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={img.url}
          alt={img.alt}
          className="rounded-t-xl w-full"
        />
      </div>
      <div className="py-6 px-4 lg:px-6 flex flex-col gap-4">
        <h3 className="text-2xl font-medium capitalize">{name}</h3>
        <p className="text-mutedBlueGray hidden md:block">
          {detail}
        </p>
        <div className="flex gap-3">
          {tags.map((tag) => {
            return (
              <Tag text={tag} />
            )
          })}
        </div>
        <div className="flex gap-8 justify-center">
          <Button
            text={"Live Demo"}
            style={"bg-mutedBlue-300 text-white py-3 px-6"}
            icon={{
              url: "./src/assets/images/icons/eye-open.png",
              alt: "icon eye open",
            }}
            iconStyle="w-5"
          />
          <Button
            text={"Code"}
            style={"bg-white py-3 px-6"}
            icon={{
              url: "./src/assets/images/icons/github-black.svg",
              alt: "icon github-black",
            }}
            iconStyle="w-5"
          />
        </div>
      </div>
    </div>
  );
};
