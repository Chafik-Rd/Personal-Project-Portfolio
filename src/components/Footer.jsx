import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
export const Footer = () => {
  const location = useLocation().pathname;
  return (
    <div className="flex flex-col justify-center bg-white px-4 md:px-12">
      <div className="flex flex-col items-center justify-between gap-2 border-t py-2 md:flex-row">
        <p>© 2025 Made withby Chafik Raden-ahmad</p>

        <Link
          to={`${location === "/allproject" ? "allProjects" : "landingPage"}`}
          smooth={true}
          duration={500}
          className="ml-auto md:ml-0"
        >
          <Button
            size="md"
            variant="outline"
            className="py-2 text-base md:animate-bounce"
          >
            <ArrowUp strokeWidth={1.5} className="size-5" />
            Back to top
          </Button>
        </Link>
      </div>
    </div>
  );
};
