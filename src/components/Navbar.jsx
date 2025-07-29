export const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between items-center px-12 py-4 bg-linear-to-br from-mutedBlue-300 to-mutedBlue-200">
                <section>
                    <p className="text-3xl text-transparent bg-clip-text bg-linear-to-br from-mutedBlue-300 to-turquoise-400 font-bold">CR</p>
                </section>
                <section>
                    <ul className="flex gap-6">
                        <li>Home</li>
                        <li>About me</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Experience</li>
                        <li>Contact</li>
                    </ul>
                </section>
            </div>
        </nav>
    )
}