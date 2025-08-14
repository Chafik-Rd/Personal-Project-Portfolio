import { Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
export const ContactIcon = ({ href, icon, variant }) => {
  const icons = {
    github: Github,
    linkedin: Linkedin,
    send: Send,
  };
  const IconComponent = icons[icon];
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button size="icon" variant={variant}>
        <IconComponent className="size-5" />
      </Button>
    </a>
  );
};
