import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import minesweeperShot from "../assets/projects/Minesweeper.png";
import portfolioShot from "../assets/projects/Portfolio.png";

interface Project {
  title: string;
  screenshot: string;
  screenshotAlt: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Minesweeper Game",
    screenshot: minesweeperShot,
    screenshotAlt:
      "Minesweeper game interface showing the board and dark visual style",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API",
      "useReducer",
    ],
    githubUrl: "https://github.com/OtonielG/minesweeperTS",
    liveUrl: "https://minesweeper-ts-topaz.vercel.app/",
  },
  {
    title: "Portfolio Website",
    screenshot: portfolioShot,
    screenshotAlt: "Portfolio website interface showing main sections",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/OtonielG/frontend-portfolioTS",
    liveUrl: "https://frontend-portfolio-ts.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative flex min-h-dvh w-full flex-col justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 px-6 pt-28 pb-16 md:px-14 lg:px-40"
    >
      <div className="absolute top-0 left-0 h-32 w-full pointer-events-none bg-linear-to-b from-black to-transparent" />

      <header className="flex w-full flex-col items-center">
        <motion.span
          className="flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Featured Work
        </motion.span>

        <motion.h2
          id="projects-heading"
          className="mt-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My{" "}
          <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Some of the projects I&apos;ve built while improving my frontend
          development and problem-solving skills.
        </motion.p>
      </header>

      <div className="mt-12 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,165,0,0.12)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="flex h-56 items-center justify-center overflow-hidden bg-[#0b1220] p-3 sm:h-64">
              <img
                src={project.screenshot}
                alt={project.screenshotAlt}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label={`Technologies used in ${project.title}`}
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <span className="inline-flex rounded-full bg-gray-700/60 px-3 py-1 text-xs font-medium text-gray-200">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-gray-200 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,165,0,0.28)]"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Live Demo
                  </a>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-amber-700 px-5 py-3 text-sm font-semibold text-gray-300 transition-all duration-300 hover:bg-amber-700 hover:shadow-[0_0_20px_rgba(255,165,0,0.2)]"
                  aria-label={`Open GitHub repository of ${project.title}`}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  View Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
