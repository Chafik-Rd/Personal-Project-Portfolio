import { PageHeader } from "./PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Linkedin, Github, MapPin, Phone, Mail } from "lucide-react";
import { ContactCard } from "./ContactCard";

const contacts = [
  {
    id: 3,
    header: "Phone",
    title: "099-3108320",
    icon: <Phone className="m-auto" />,
  },
  {
    id: 2,
    header: "Location",
    title: "Bangkok, Thailand",
    icon: <MapPin className="m-auto" />,
  },
  {
    id: 1,
    header: "Email",
    title: "Chafikraden@gmail.com",
    icon: <Mail className="m-auto" />,
  },
];
const connectsMe = [
  {
    id: 3,
    header: "Github",
    link: "",
    icon: <Github className="size-5" />,
  },
  {
    id: 2,
    header: "Linkedin",
    link: "",
    icon: <Linkedin className="size-5" />,
  },
  {
    id: 1,
    header: "Telegram",
    link: "Chafikraden@gmail.com",
    icon: <Send className="size-5" />,
  },
];
export const Contact = () => {
  const handleSubmit = () => {
    console.log("");
  }
  return (
    <div className="py-16 px-4 md:px-12 bg-softWhite flex flex-col gap-14 items-center">
      <PageHeader
        header={"Get In Touch"}
        text={
          "I'm always open to discussing new opportunities, projects, or just having a conversation about technology"
        }
      />
      <div className="flex flex-col md:flex-row gap-8 max-w-336 w-full">
        <section className="w-full">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-3xl">Send me a message</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div>
                  <label>Name</label>
                  <Input type="text" placeholder="Your name" />
                </div>
                <div>
                  <label>Email</label>
                  <Input type="email" placeholder="Your.email@example.com" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    placeholder="Your message..."
                    className="block border-1 p-4 rounded-md w-full h-60"
                  ></textarea>
                </div>
              </form>
              <Button type="submit" size="md" className="w-full">
                <Send size={16} />
                About Me
              </Button>
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col gap-8 w-full">
          <h3 className="text-2xl font-medium">Contact Information</h3>
          <div className="flex flex-col gap-3">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} header={contact.header} detail={contact.title}>
                {contact.icon}
              </ContactCard>
            ))}
          </div>
          <div>
            <h4 className="text-xl font-medium mb-2">Connect with me</h4>
            <div className="flex gap-8">
              {connectsMe.map((connectMe) => (
                <Button key={connectMe.id} size="icon" variant="outline">
                {connectMe.icon}
              </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 bg-linear-to-br from-mutedBlue-300 to-turquoise-400 px-6 py-4 rounded-xl text-white text-center">
            <h4 className="text-2xl font-medium">Let's work together!</h4>
            <p className="text-xl">
              I'm currently available for freelance work and open to new
              opportunities.
            </p>
            <Button
              size="md"
              variant="outline"
              className="text-mutedBlue-300 text-lg w-fit"
            >
              Download Resume
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
