import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mouse } from "lucide-react";
import { Link } from "react-scroll";
import { connectsMe, linkCV } from "../data/contacts";
import { ContactIcon } from "./ContactIcon";

export const LandingPage = () => {
  return (
    <div
      id="landingPage"
      className="from-mutedBlue-300 to-mutedBlue-200 relative flex min-h-[calc(100vh-68px)] flex-col items-center justify-center bg-linear-to-br p-6 font-medium text-white"
    >
      <div className="flex max-w-200 flex-col items-center gap-6">
        <p className="text-turquoise-400 text-2xl md:text-3xl">Hello, I'm</p>
        <h1 className="text-center text-5xl font-bold md:text-8xl">
          Chafik
          <br />
          <span className="text-turquoise-400">Raden-ahmad</span>
        </h1>
        <p className="text-3xl md:text-4xl">Full Stack Developer</p>
        <p className="text-center text-base md:text-xl">
          Self-taught Full Stack Developer with a growth mindset, crafting
          user-friendly React interfaces and continuously learning new skills.
        </p>

        {/* button */}
        <div className="flex w-full flex-col justify-center gap-6 md:flex-row">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="w-full md:w-fit"
          >
            <Button size="lg" className="bg-mutedBlue-100 w-full text-xl">
              <ArrowDown strokeWidth={1.5} className="size-5" />
              About Me
            </Button>
          </Link>
          <a
            href={linkCV}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-fit"
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-mutedBlue-300 w-full text-xl"
            >
              <Download strokeWidth={1.5} className="size-5" />
              Resume
            </Button>
          </a>
        </div>

        {/* contact */}
        <div className="animate-float flex gap-8 pt-10">
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
      <div className="absolute bottom-0 hidden animate-bounce cursor-pointer md:block">
        <Link to="about" smooth={true} duration={500}>
          <Mouse color="#ffffff66" strokeWidth={1} size={48} />
        </Link>
      </div>
    </div>
  );
};
