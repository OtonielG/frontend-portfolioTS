import { motion } from "framer-motion";
import heroImg from "../assets/hero-png.png";
import githubSVG from "../assets/github-svg.svg";
import gmailSVG from "../assets/gmail-svg.svg";
import linkedinSVG from "../assets/linkedin-svg.svg";
import CV from "../assets/Otoniel_Gomez_Frontend_Developer_CV.pdf";
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
      className="relative flex flex-col gap-8 lg:flex-row justify-center items-center overflow-hidden 
      bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 w-full min-h-dvh px-6 md:px-14 lg:px-40 pt-28 lg:pt-12"
    >
      <div className="absolute top-0 left-0 w-full h-32 pointer-events-none bg-linear-to-b from-black to-transparent" />

      <article className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-4">
        <motion.ul
          className="flex gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
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
                  alt={social.alt}
                  className={`size-12 ${social.alt === "GitHub" ? "rounded-full bg-orange-400 p-1" : ""}`}
                />
              </a>
            </li>
          ))}
        </motion.ul>

        <motion.span
          className="w-fit flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Open to work
        </motion.span>

        <motion.h1
          className="title-font text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Otoniel
          </span>
        </motion.h1>

        <motion.p
          className="text-base font-medium text-orange-500 sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frontend Developer · React · TypeScript
        </motion.p>

        <motion.p
          className="max-w-md text-center text-sm leading-relaxed text-gray-300 sm:max-w-lg sm:text-base lg:text-start lg:text-lg sm:mb-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Junior Frontend Developer focused on building responsive and
          accessible web applications with React and TypeScript. I enjoy
          creating clean, responsive interfaces and continuously improving my
          development skills.
        </motion.p>

        <motion.div
          className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-full md:w-auto">
            <a
              href={CV}
              download="Otoniel_CV.pdf"
              className="bg-linear-to-r from-orange-500 to-amber-400 
              flex w-full flex-nowrap items-center justify-center rounded-full py-3 px-8 text-lg font-bold text-gray-300
              transition-shadow duration-300 hover:shadow-[0_0_25px_rgb(255,165,0,0.4)] md:w-auto"
            >
              <DownloadIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Download CV</span>
            </a>
          </div>

          <div className="w-full md:w-auto">
            <a
              href="#contact"
              className="flex w-full flex-nowrap items-center justify-center rounded-full border-2 border-amber-700
              py-3 px-8 text-lg font-bold text-gray-300 transition-transform duration-300
              hover:bg-amber-700 hover:shadow-[0_0_25px_rgb(255,165,0,0.4)] md:w-auto"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <span className="whitespace-nowrap">Contact Me</span>
            </a>
          </div>
        </motion.div>
      </article>

      <motion.article
        className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center items-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={heroImg}
          alt="Illustration of Otoniel"
          className="w-full max-w-md lg:max-w-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.article>
    </section>
  );
}
