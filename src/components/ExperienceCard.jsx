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
    <div className="h-full w-full max-w-170 rounded-xl p-6 shadow-md hover:shadow-lg">
      {/* header */}
      <div className="flex items-center justify-between font-medium">
        <h4 className="text-lg sm:text-xl md:text-2xl">{name}</h4>
        {tag ? <Badge variant="outline">{tag}</Badge> : <></>}
      </div>
      <div className="flex flex-col gap-4">
        <h5 className="text-mutedBlue-300 text-base font-medium md:text-xl">
          {organization}
        </h5>

        {/* date & location */}
        <div className="text-mutedBlueGray flex flex-col gap-2 text-sm md:text-base lg:flex-row lg:gap-6">
          <section className="flex items-center gap-1">
            <Calendar strokeWidth={1.5} size={16} />
            <p>{date}</p>
          </section>
          <section className="flex items-center gap-1">
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
