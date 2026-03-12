import heroImg from "../assets/hero-png.png";
import githubSVG from "../assets/github-svg.svg";
import gmailSVG from "../assets/gmail-svg.svg";
import linkedinSVG from "../assets/linkedin-svg.svg";
import CV from "../assets/Untitled document.pdf";
import { DownloadIcon, Mail } from "lucide-react";

interface SocialIcon {
  icon: string;
  alt: string;
  href: string;
  external?: boolean;
}

const socialIcons: SocialIcon[] = [
  {
    icon: githubSVG,
    alt: "GitHub",
    href: "https://github.com/OtonielG",
    external: true,
  },
  {
    icon: gmailSVG,
    alt: "Gmail",
    href: "mailto:otonielgomez993@gmail.com?subject=Frontend%20Developer%20Opportunity",
  },
  {
    icon: linkedinSVG,
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/otoniel-gomez-03gt/",
    external: true,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-wrap justify-center items-center overflow-hidden 
      bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 w-full min-h-dvh px-6 md:px-14 lg:px-40 pt-28 md:pt-12"
    >
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-linear-to-b from-black to-transparent" />
      <article className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4 ">
        <ul className="flex gap-4">
          {socialIcons.map((social) => (
            <li
              key={social.alt}
              className="hover:-translate-y-2 transition-transform duration-300"
            >
              <a
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noreferrer" : undefined}
                aria-label={`Open ${social.alt}`}
              >
                <img
                  src={social.icon}
                  className={`size-12 ${social.alt === "GitHub" && "rounded-full bg-orange-400 p-1"}`}
                />
              </a>
            </li>
          ))}
        </ul>
        <span className="w-fit flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400">
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Open to work
        </span>
        <h1 className="title-font text-3xl font-bold sm:text-4xl lg:text-5xl text-white">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Otoniel
          </span>
        </h1>
        <p className="text-orange-500 font-medium text-base sm:text-lg">
          Frontend Developer · React · TypeScript
        </p>
        <p className="max-w-md leading-relaxed sm:mb-8 sm:max-w-lg text-gray-300">
          Junior Frontend Developer focused on building modern web applications
          with React and JavaScript. <br />I enjoy creating clean, responsive
          interfaces and continuously improving my development skills.
        </p>
        <div className="flex gap-6">
          <div className="flex gap-6">
            <a
              href={CV}
              download="Otoniel_CV.pdf"
              className="bg-linear-to-r from-orange-500 to-amber-400 
            flex justify-center items-center py-3 px-8 rounded-full text-lg font-bold text-gray-300
            hover:shadow-[0_0_25px_rgb(255,165,0,0.4)] transition-shadow duration-300"
            >
              <DownloadIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Download CV</span>
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="#home"
              className="py-3 px-8 flex justify-center items-center rounded-full text-lg font-bold text-gray-300
              border-2 border-amber-700 hover:bg-amber-700 transition-transform duration-300 
              hover:shadow-[0_0_25px_rgb(255,165,0,0.4)]"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </article>
      <article className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={heroImg}
          alt="Hero Image"
          className="hover:scale-110 transition-transform duration-300"
        />
      </article>
    </section>
  );
}
