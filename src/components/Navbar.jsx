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
          <div className="flex flex-col items-center justify-between px-4 py-4 md:flex-row md:px-12">
            <section className="items flex w-full justify-between md:w-fit">
              <p className="from-mutedBlue-300 to-turquoise-400 bg-linear-to-br bg-clip-text text-3xl font-bold text-transparent">
                CR
              </p>
              {isMenu ? (
                <X
                  onClick={() => setIsMenu(false)}
                  className="hover:bg-mutedBlue-100 my-auto rounded md:hidden"
                />
              ) : (
                <AlignJustify
                  onClick={() => setIsMenu(true)}
                  className="hover:bg-mutedBlue-100 my-auto rounded md:hidden"
                />
              )}
            </section>

            {/* Desktop Navigation */}
            <ul className="hidden gap-6 md:flex">
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
              <ul className="flex w-full flex-col rounded-lg bg-white p-4 shadow md:hidden">
                {navItems.map((item) => (
                  <li
                    key={item.id}
                    className="hover:bg-turquoise-100 cursor-pointer rounded-lg p-2"
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
