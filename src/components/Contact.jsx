import { PageHeader } from "./PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Linkedin, Github } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { connectsMe, contacts, linkCV } from "../data/contacts";
import { ContactIcon } from "./ContactIcon";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const icons = {
  github: Github,
  linkedin: Linkedin,
  send: Send,
};
export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form,
        import.meta.env.VITE_YOUR_PUBLIC_KEY,
      )
      .then(
        () => alert("✅ Message sent successfully!"),
        (error) => alert("❌ Failed to send: " + error.text),
      );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div
      id="contact"
      className="bg-softWhite flex flex-col items-center gap-14 px-6 py-16 md:px-12"
    >
      <PageHeader
        header={"Get In Touch"}
        text={
          "I'm always open to discussing new opportunities, projects, or just having a conversation about technology"
        }
      />
      <div className="flex w-full max-w-336 flex-col gap-8 md:flex-row">
        {/* send message */}
        <section className="w-full">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <label>
                  <p>Name</p>
                  <Input
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    name="name"
                    value={form.name}
                    required
                  />
                </label>

                <label>
                  <p>Email</p>
                  <Input
                    onChange={handleChange}
                    type="email"
                    placeholder="Your.email@example.com"
                    name="email"
                    value={form.email}
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  />
                </label>

                <label>
                  <p>Message</p>
                  <textarea
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="block h-60 w-full rounded-md border-1 p-4"
                    name="message"
                    value={form.message}
                    required
                  ></textarea>
                </label>
                <Button
                  type="submit"
                  size="md"
                  className={`w-full ${
                    Object.values(form).some((item) => item.trim() === "") &&
                    "bg-mutedBlue-300/70 pointer-events-none"
                  }`}
                >
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* contact */}
        <section className="flex w-full flex-col gap-8">
          <h3 className="text-xl font-medium sm:text-2xl md:text-3xl">
            Contact Information
          </h3>
          <div className="flex flex-col gap-3">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                header={contact.header}
                detail={contact.title}
                link={contact.link}
                icon={contact.icon}
              />
            ))}
          </div>
          <div>
            <h4 className="mb-2 text-xl font-medium">Connect with me</h4>
            <div className="flex gap-8">
              {connectsMe.map((connectMe) => {
                const IconComponent = icons[connectMe.icon];
                return (
                  <ContactIcon
                    key={connectMe.id}
                    href={connectMe.link}
                    icon={connectMe.icon}
                    variant={"outline"}
                  />
                );
              })}
            </div>
          </div>

          {/* card */}
          <div className="from-mutedBlue-300 to-turquoise-400 flex flex-col items-center gap-3 rounded-xl bg-linear-to-br px-6 py-4 text-center text-white">
            <h4 className="text-xl font-medium sm:text-2xl">
              Let's work together!
            </h4>
            <p className="text-lg sm:text-xl">
              I'm eager to grow, learn, and take on new challenges.
            </p>
            <a href={linkCV} target="_blank" rel="noopener noreferrer">
              <Button
                size="md"
                variant="outline"
                className="text-mutedBlue-300 w-fit sm:text-lg"
              >
                Download Resume
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
