import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mouse } from "lucide-react";
import { Link } from "react-scroll";
import { connectsMe, linkCV } from "../data/contacts";
import { ContactIcon } from "./ContactIcon";

export const LandingPage = () => {
  return (
    <div
      id="landingPage"
      className="min-h-[calc(100vh-68px)] relative bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200 text-white font-medium p-6 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-6 items-center max-w-200">
        <p className="text-turquoise-400 text-2xl md:text-3xl">Hello, I'm</p>
        <h1 className="text-5xl md:text-8xl font-bold text-center">
          Chafik
          <br />
          <span className="text-turquoise-400">Raden-ahmad</span>
        </h1>
        <p className="text-3xl md:text-4xl">Frontend Developer</p>
        <p className="text-base md:text-xl text-center">
          Self-taught Frontend Developer with a growth mindset, crafting
          user-friendly React interfaces and continuously learning new skills.
        </p>

        {/* button */}
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="w-full md:w-fit"
          >
            <Button size="lg" className="text-xl bg-mutedBlue-100 w-full">
              <ArrowDown strokeWidth={1.5} className="size-5" />
              About Me
            </Button>
          </Link>
          <a href={linkCV} target="_blank" rel="noopener noreferrer" className="w-full md:w-fit">
            <Button
              size="lg"
              variant="secondary"
              className="text-xl text-mutedBlue-300 w-full"
            >
              <Download strokeWidth={1.5} className="size-5" />
              Resume
            </Button>
          </a>
        </div>

        {/* contact */}
        <div className="flex gap-8 animate-float pt-10">
          {connectsMe.map((connectMe) => (
            <ContactIcon
              key={connectMe.id}
              href={connectMe.link}
              icon={connectMe.icon}
              variant={"ghost"}
            />
          ))}
        </div>
      </div>

      {/* scroll down */}
      <div className="animate-bounce absolute bottom-0 cursor-pointer hidden md:block">
        <Link to="about" smooth={true} duration={500}>
          <Mouse color="#ffffff66" strokeWidth={1} size={48} />
        </Link>
      </div>
    </div>
  );
};
