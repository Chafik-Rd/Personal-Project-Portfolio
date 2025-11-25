import { connectsAboutMe } from "../data/contacts";
import { ContactCard } from "./ContactCard";
import { PageHeader } from "./PageHeader";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="bg-softWhite flex flex-col items-center gap-14 px-6 py-16 md:px-12"
    >
      <PageHeader
        header={"About me"}
        text={
          "Get to know more about my background, skills, and passion for web development"
        }
      />

      <div className="flex max-w-330 flex-col items-center gap-6 lg:flex-row">
        {/* imge */}
        <section className="flex h-full w-full">
          <div className="flex w-full items-end">
            <span className="bg-turquoise-300 animate-float h-10 w-10 rounded-full md:h-20 md:w-20"></span>
          </div>
          <div className="w-full">
            <div className="bg-turquoise-100 h-50 w-50 rounded-full md:h-100 md:w-100">
              <img src="./images/fik.png" />
            </div>
          </div>

          <div className="flex w-full justify-center">
            <span className="bg-turquoise-200 animate-float h-13 w-13 rounded-full md:h-25 md:w-25"></span>
          </div>
        </section>

        {/* contact */}
        <section className="flex h-full w-full flex-col gap-4">
          <h3 className="text-xl font-medium sm:text-2xl">
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
