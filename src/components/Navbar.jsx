import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { AlignJustify, X } from "lucide-react";

const navItems = [
  { id: 6, menu: "Home", link: "landingPage" },
  { id: 5, menu: "About me", link: "about" },
  { id: 4, menu: "Projects", link: "projects" },
  { id: 3, menu: "Tech Stack", link: "techStack" },
  { id: 2, menu: "Experience", link: "experience" },
  { id: 1, menu: "Contact", link: "contact" },
];
export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      {location !== "/allproject" && (
        <nav
          className={`sticky top-0 z-10 backdrop-blur-md ${
            scrollY > 100 && "bg-white/80"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4">
            <section className="flex justify-between items w-full md:w-fit">
              <p className="text-3xl text-transparent bg-clip-text bg-linear-to-br from-mutedBlue-300 to-turquoise-400 font-bold">
                CR
              </p>
              {isMenu ? (
                <X
                  onClick={() => setIsMenu(false)}
                  className="md:hidden my-auto rounded hover:bg-mutedBlue-100"
                />
              ) : (
                <AlignJustify
                  onClick={() => setIsMenu(true)}
                  className="md:hidden my-auto rounded hover:bg-mutedBlue-100"
                />
              )}
            </section>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <li key={item.id} className="cursor-pointer hover:scale-95">
                  <Link to={item.link} smooth={true} duration={500}>
                    {item.menu}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Navigation */}
            {isMenu && (
              <ul className="flex flex-col md:hidden  bg-white w-full p-4 rounded-lg shadow">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="cursor-pointer rounded-lg p-2 hover:bg-turquoise-100"
                  >
                    <Link to={item.link} smooth={true} duration={500}>
                      {item.menu}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      )}
    </>
  );
};
