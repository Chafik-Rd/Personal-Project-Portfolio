import { Button } from "./Button";
import { IconCard } from "./IconCard";

export const Home = () => {
  return (
    <div className="relative bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200 text-white font-medium p-4 flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-6 items-center max-w-200">
        <p className="text-turquoise-400 text-2xl md:text-3xl">Hello, I'm</p>
        <h1 className="text-5xl md:text-8xl font-bold text-center">
          Chafik
          <br />
          <span className="text-turquoise-400">Raden-ahmad</span>
        </h1>
        <p className="text-3xl md:text-4xl">Frontend Developer</p>
        <p className="text-base md:text-xl text-center">
          Passionate engineer from Bangkok, Thailand, specializing in React
          development and creating beautiful, functional web experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
          <Button
            text={"About Me"}
            style={"bg-mutedBlue-100 text-lg w-full md:w-50 hover:scale-95"}
          />
          <Button
            text={"Resume"}
            style={
              "bg-white text-lg w-50 text-mutedBlue-300 w-full md:w-50 hover:scale-95"
            }
            icon={{
              url: "./src/assets/images/download.svg",
              alt: "icon download",
            }}
          />
        </div>
        <div className="flex gap-8 animate-float pt-10">
          <IconCard
            icon={{
              url: "./src/assets/images/github-white.svg",
              alt: "icon github-white",
            }}
            style={"hover:bg-mutedBlue-100 cursor-pointer"}
          />
          <IconCard
            icon={{
              url: "./src/assets/images/linkedin-white.svg",
              alt: "icon linkedin-white",
            }}
            style={"hover:bg-mutedBlue-100 cursor-pointer"}
          />
          <IconCard
            icon={{
              url: "./src/assets/images/talagram-white.svg",
              alt: "icon linkedin-white",
            }}
            style={"hover:bg-mutedBlue-100 cursor-pointer"}
          />
        </div>
      </div>
      <div className="animate-bounce absolute bottom-0 cursor-pointer">
        <img src="./src/assets/images/mouse.svg" />
      </div>
    </div>
  );
};
