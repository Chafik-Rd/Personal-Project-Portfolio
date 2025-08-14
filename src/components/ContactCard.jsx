import { MapPin, Phone, Mail, Calendar, GraduationCap } from "lucide-react";

export const ContactCard = ({ header, detail, icon, link }) => {
  const icons = {
    phone: Phone,
    mapPin: MapPin,
    mail: Mail,
    calendar: Calendar,
    graduation: GraduationCap,
  };
 const IconComponent = icons[icon];
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${link === "#" && "pointer-events-none"}`}
    >
      <div className="px-4 md:px-6 py-4 flex gap-3 items-center rounded-xl border-1 border-grayLight shadow-md hover:shadow-lg">
        <div className="bg-turquoise-100 p-3 rounded-xl text-mutedBlue-300">
          <IconComponent size={16} strokeWidth={1.5} />
        </div>
        <div>
          <p className="font-medium text-lg sm:text-xl">{header}</p>
          <p className="text-mutedBlueGray mt-1">{detail}</p>
        </div>
      </div>
    </a>
  );
};
