import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mouse } from "lucide-react";
import { Send, Linkedin, Github } from "lucide-react";
import { Link } from "react-scroll";

const connectsMe = [
  {
    id: 3,
    header: "Github",
    link: "https://github.com/Chafik-Rd",
    icon: <Github className="size-5" />,
  },
  {
    id: 2,
    header: "Linkedin",
    link: "https://www.linkedin.com/in/chafik-rd/",
    icon: <Linkedin className="size-5" />,
  },
  {
    id: 1,
    header: "Telegram",
    link: "https://t.me/ChafikRd",
    icon: <Send className="size-5" />,
  },
];

export const LandingPage = () => {
  return (
    <div id="landingPage" className="min-h-[calc(100vh-68px)] relative bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200 text-white font-medium p-4 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 items-center max-w-200">
        <p className="text-turquoise-400 text-2xl md:text-3xl">Hello, I'm</p>
        <h1 className="text-5xl md:text-8xl font-bold text-center">
          Chafik
          <br />
          <span className="text-turquoise-400">Raden-ahmad</span>
        </h1>
        <p className="text-3xl md:text-4xl">Frontend Developer</p>
        <p className="text-base md:text-xl text-center">
          Frontend Developer with a background in Electronics Engineering,
          passionate about creating user-friendly interfaces with React. Skilled
          in teamwork, problem-solving, and continuous learning.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <Button size="lg" className="text-xl bg-mutedBlue-100">
            <ArrowDown strokeWidth={1.5} className="size-5" />
            About Me
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="text-xl text-mutedBlue-300"
          >
            <Download strokeWidth={1.5} className="size-5" />
            Resume
          </Button>
        </div>
        <div className="flex gap-8 animate-float pt-10">
          {connectsMe.map((connectMe) => (
            <a key={connectMe.id} href={connectMe.link} target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost">
                {connectMe.icon}
              </Button>
            </a>
          ))}
        </div>
      </div>
      <div className="animate-bounce absolute bottom-0 cursor-pointer">
        <Link to="about" smooth={true} duration={500}>
          <Mouse color="#ffffff66" strokeWidth={1} size={48} />
        </Link>
      </div>
    </div>
  );
};
