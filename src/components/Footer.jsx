import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
export const Footer = () => {
  const location = useLocation().pathname;
  return (
    <div className="bg-white px-4 md:px-12 flex flex-col justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 border-t py-2">
        <p>© 2025 Made withby Chafik Raden-ahmad</p>
        <Link
          to={`${location === "/allproject" ? "allProjects" : "landingPage"}`}
          smooth={true}
          duration={500}
        >
          <Button
            size="md"
            variant="outline"
            className="text-base py-2 animate-bounce"
          >
            <ArrowUp strokeWidth={1.5} className="size-5" />
            Back to top
          </Button>
        </Link>
      </div>
    </div>
  );
};
