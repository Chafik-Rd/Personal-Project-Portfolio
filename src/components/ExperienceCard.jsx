import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ExperienceCard = ({
  name,
  tag,
  organization,
  date,
  location,
  detail,
}) => {
  return (
    <div className="max-w-170 w-full h-full rounded-xl p-6 shadow-md hover:shadow-lg">
      {/* header */}
      <div className="flex justify-between items-center font-medium">
        <h4 className="text-lg sm:text-xl md:text-2xl">{name}</h4>
        {tag ? <Badge variant="outline">{tag}</Badge> : <></>}
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-base md:text-xl font-medium text-mutedBlue-300">
          {organization}
        </h5>

        {/* date & location */}
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 text-mutedBlueGray text-sm md:text-base">
          <section className="flex gap-1">
            <Calendar strokeWidth={1.5} size={16} />
            <p>{date}</p>
          </section>
          <section className="flex gap-1">
            <MapPin strokeWidth={1.5} size={16} />
            <p>{location}</p>
          </section>
        </div>

        {/* details */}
        <ul
          className={`text-mutedBlueGray text-sm md:text-base ${
            detail.length > 1 && "list-disc pl-4"
          }`}
        >
          {detail.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
