import { connectsAboutMe } from "../data/contacts";
import { ContactCard } from "./ContactCard";
import { PageHeader } from "./PageHeader";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="py-16 px-6 md:px-12 bg-softWhite flex flex-col gap-14 items-center"
    >
      <PageHeader
        header={"About me"}
        text={
          "Get to know more about my background, skills, and passion for web development"
        }
      />

      <div className="flex flex-col lg:flex-row gap-6 items-center max-w-330">
        {/* imge */}
        <section className="flex h-full w-full">
          <div className="flex items-end w-full">
            <span className="w-10 md:w-20 h-10 md:h-20 rounded-full bg-turquoise-300 animate-float"></span>
          </div>
          <div className="w-full">
            <div className="w-50 md:w-100 h-50 md:h-100 rounded-full bg-turquoise-100">
              <img src="./images/fik.png" />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <span className="w-13 md:w-25 h-13 md:h-25 rounded-full bg-turquoise-200 animate-float"></span>
          </div>
        </section>

        {/* contact */}
        <section className="flex flex-col gap-4 h-full w-full">
          <h3 className="text-xl sm:text-2xl font-medium">
            Full Stack Developer
          </h3>
          <p className="text-mutedBlueGray">
            Full Stack Developer with a background in Electronics Engineering
            and 2+ years of engineering experience. Passionate about creating
            user-friendly interfaces and experienced in building full-stack apps
            using the MERN stack. Strong in problem-solving, teamwork, and
            cross-functional communication, with a growth mindset and commitment
            to continuous learning.
          </p>
          {connectsAboutMe.map((contact) => (
            <ContactCard
              key={contact.id}
              header={contact.header}
              detail={contact.title}
              link={contact.link}
              icon={contact.icon}
            >
              {contact.icon}
            </ContactCard>
          ))}
        </section>
      </div>
    </div>
  );
};
