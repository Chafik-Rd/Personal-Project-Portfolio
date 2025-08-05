import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);
  const location = useLocation().pathname;
  return (
    <>
      {location === "/allproject" ? (
        <></>
      ) : (
        <nav
          className={`sticky top-0 z-10 backdrop-blur-md ${
            scrollY > 100 ? "bg-white/80" : ""
          }`}
        >
          <div className="flex justify-between items-center px-12 py-4">
            <section>
              <p className="text-3xl text-transparent bg-clip-text bg-linear-to-br from-mutedBlue-300 to-turquoise-400 font-bold">
                CR
              </p>
            </section>
            <section>
              <img
                src="./src/assets/images/icons/menu.svg"
                className="md:hidden"
              />
              <ul className="hidden md:flex gap-6">
                <li className="cursor-pointer hover:scale-95">
                  <Link to="landingPage" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className="cursor-pointer hover:scale-95">
                  <Link to="about" smooth={true} duration={500}>
                    About me
                  </Link>
                </li>
                <li className="cursor-pointer hover:scale-95">
                  <Link to="projects" smooth={true} duration={500}>
                    Projects
                  </Link>
                </li>
                <li className="cursor-pointer hover:scale-95">
                  <Link to="techStack" smooth={true} duration={500}>
                    Tech Stack
                  </Link>
                </li>
                <li className="cursor-pointer hover:scale-95">
                  <Link to="experience" smooth={true} duration={500}>
                    Experience
                  </Link>
                </li>
                <li className="cursor-pointer hover:scale-95">
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </nav>
      )}
    </>
  );
};
