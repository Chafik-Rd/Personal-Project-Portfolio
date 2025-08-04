import { useEffect, useState } from "react"
export const Navbar = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      }
      window.addEventListener("scroll", handleScroll);
    },[scrollY]);
    return (
        <nav className={`sticky top-0 z-10 backdrop-blur-md ${scrollY>100?"bg-white/80":""}`}>
            <div className="flex justify-between items-center px-12 py-4">
                <section>
                    <p className="text-3xl text-transparent bg-clip-text bg-linear-to-br from-mutedBlue-300 to-turquoise-400 font-bold">CR</p>
                </section>
                <section>
                    <img src="./src/assets/images/icons/menu.svg" className="md:hidden"/>
                    <ul className="hidden md:flex gap-6">
                        <li className="cursor-pointer hover:scale-95">Home</li>
                        <li className="cursor-pointer hover:scale-95">About me</li>
                        <li className="cursor-pointer hover:scale-95">Tech Stack</li>
                        <li className="cursor-pointer hover:scale-95">Projects</li>
                        <li className="cursor-pointer hover:scale-95">Experience</li>
                        <li className="cursor-pointer hover:scale-95">Contact</li>
                    </ul>
                </section>
            </div>
        </nav>
    )
}