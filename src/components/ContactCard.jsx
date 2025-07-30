import { IconCard } from "./IconCard";

export const ContactCard = ({icon,header,detail}) => {
  return (
    <div className="px-4 md:px-6 py-4 flex gap-3 items-center rounded-xl border-1 border-grayLight shadow-md hover:scale-95 cursor-pointer">
      <IconCard
        icon={icon}
        style={"bg-turquoise-100 w-11 h-11"}
      />
      <div>
        <p className="font-medium text-xl">{header}</p>
        <p className="text-mutedBlueGray mt-1">{detail}</p>
      </div>
    </div>
  );
};
