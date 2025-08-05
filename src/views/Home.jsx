import { LandingPage } from "../components/LandingPage";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Experience } from "../components/Experience";
import { Project } from "../components/Projects";
import { Skills } from "../components/Skills";
export const Home = () => {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <Project />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};
