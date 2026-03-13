import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: "otonielgomez993@gmail.com",
    href: "mailto:otonielgomez993@gmail.com?subject=Frontend%20Developer%20Opportunity",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/OtonielG",
    href: "https://github.com/OtonielG",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/otoniel-gomez-03gt",
    href: "https://www.linkedin.com/in/otoniel-gomez-03gt/",
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Guatemala",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh w-full flex-col justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 px-6 pt-28 pb-16 md:px-14 lg:px-40"
    >
      <div className="absolute top-0 left-0 h-32 w-full pointer-events-none bg-linear-to-b from-black to-transparent" />

      <div className="flex w-full flex-col items-center">
        <motion.span
          className="flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Let&apos;s Connect
        </motion.span>

        <motion.h2
          className="mt-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact{" "}
          <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          I&apos;m currently seeking a junior frontend developer role where I
          can apply my skills to real projects and contribute to building
          modern, responsive web applications.
        </motion.p>
      </div>

      <div className="mt-12 grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, index) => (
            <motion.article
              key={item.label}
              className="rounded-xl border border-gray-700/50 bg-gray-800/50 p-5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-orange-500/10 p-2">
                  <item.icon
                    className="h-5 w-5 text-orange-500"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-semibold text-white">
                    {item.label}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-gray-300 transition-colors duration-300 hover:text-orange-400 sm:text-base"
                    >
                      <span className="min-w-0 flex-1 truncate">
                        {item.value}
                      </span>

                      <ArrowUpRight
                        className="h-4 w-4 shrink-0 text-orange-500"
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300 sm:text-base">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.article
          className="flex rounded-xl border border-gray-700/50 bg-gray-800/50 p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Let&apos;s work together
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                If you have a junior frontend opportunity or would like to
                connect professionally, feel free to reach out by email.
                I&apos;d be happy to talk.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="mailto:otonielgomez993@gmail.com?subject=Frontend%20Developer%20Opportunity"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-8 py-3 text-lg font-bold text-gray-300 transition-shadow duration-300 hover:shadow-[0_0_25px_rgb(255,165,0,0.4)] sm:w-auto"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
