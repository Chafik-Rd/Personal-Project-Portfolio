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
      <div className="border-grayLight flex items-center gap-3 rounded-xl border-1 px-4 py-4 shadow-md hover:shadow-lg md:px-6">
        <div className="bg-turquoise-100 text-mutedBlue-300 rounded-xl p-3">
          <IconComponent size={16} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-lg font-medium sm:text-xl">{header}</p>
          <p className="text-mutedBlueGray mt-1">{detail}</p>
        </div>
      </div>
    </a>
  );
};
