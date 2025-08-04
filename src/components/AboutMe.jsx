import { ContactCard } from "./ContactCard";
import { PageHeader } from "./PageHeader";

export const AboutMe = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-softWhite flex flex-col gap-14 items-center">
      <PageHeader
        header={"About me"}
        text={
          "Get to know more about my background, skills, and passion for web development"
        }
      />
      <div className="flex flex-col lg:flex-row gap-6 items-center max-w-330">
        <section className="flex h-full w-full">
          <div className="flex items-end w-full">
            <span className="w-10 md:w-20 h-10 md:h-20 rounded-full bg-turquoise-300 animate-float"></span>
          </div>
          <div className="w-full">
            <div className="w-50 md:w-100 h-50 md:h-100 rounded-full bg-turquoise-100">
              <img src="./src/assets/images/fik.png" />
            </div>
          </div>

          <div className="flex justify-center w-full">
            <span className="w-13 md:w-25 h-13 md:h-25 rounded-full bg-turquoise-200 animate-float"></span>
          </div>
        </section>
        <section className="flex flex-col gap-4 h-full w-full">
          <h3 className="text-2xl font-medium">
            Frontend Developer
          </h3>
          <p className="text-mutedBlueGray">
            Passionate Frontend Developer based in Bangkok with a background in
            Electronics Engineering. I specialize in building responsive, modern
            web apps using React and constantly seek to improve my skills
            through hands-on projects and learning.
          </p>
          <ContactCard
            icon={{
              url: "./src/assets/images/icons/marker-blue.svg",
              alt: "icon marker",
            }}
            header={"Location"}
            detail={"Bangkok, Thailand"}
          />
          <ContactCard
            icon={{
              url: "./src/assets/images/icons/mail.svg",
              alt: "icon mail",
            }}
            header={"Email"}
            detail={"Chafikraden@gmail.com"}
          />
          <ContactCard
            icon={{
              url: "./src/assets/images/icons/graduation.svg",
              alt: "icon graduation",
            }}
            header={"Education"}
            detail={"B.Eng. in Electronics - KMITL"}
          />
          <ContactCard
            icon={{
              url: "./src/assets/images/icons/calendar-blue.svg",
              alt: "icon calendar",
            }}
            header={"Experience"}
            detail={"2+ years in Engineering"}
          />
        </section>
      </div>
    </div>
  );
};
