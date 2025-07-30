import { useState } from "react";
export const SkillsCard = ({ header, icons }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      className="p-4 lg:max-w-100 w-full bg-white shadow-md rounded-xl flex flex-col gap-6 items-center border-1 md:border-0 border-grayLight cursor-pointer md:cursor-default text-center hover:scale-95 hover:md:scale-none mx-auto"
    >
      <p className="text-3xl font-medium">{header}</p>
      <div
        className={`${
          show ? "flex" : "hidden"
        } md:flex justify-between gap-3 flex-wrap`}
      >
        {icons.map((icon, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 items-center w-32 h-30"
            >
              <img
                src={icon.icon.url}
                alt={icon.icon.alt}
                className="w-20 h-20"
              />
              <p className="text-xl">{icon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
