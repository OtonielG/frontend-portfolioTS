import cssIcon from "../assets/skills/css-3-svgrepo-com.svg";
import gitIcon from "../assets/skills/git-svgrepo-com.svg";
import githubIcon from "../assets/skills/github-142-svgrepo-com.svg";
import htmlIcon from "../assets/skills/html-5-svgrepo-com.svg";
import jsIcon from "../assets/skills/javascript-svgrepo-com.svg";
import reactIcon from "../assets/skills/react-svgrepo-com.svg";
import reduxIcon from "../assets/skills/redux-svgrepo-com.svg";
import tailwindIcon from "../assets/skills/tailwind-svgrepo-com.svg";
import tsIcon from "../assets/skills/typescript-svgrepo-com.svg";
import vscodeIcon from "../assets/skills/visual-studio-code-svgrepo-com.svg";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "Git", icon: gitIcon },
  { name: "GitHub", icon: githubIcon },
  { name: "VS Code", icon: vscodeIcon },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-dvh w-full flex-col justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 px-6 pt-28 pb-16 md:px-14 lg:px-40"
    >
      <div className="absolute top-0 left-0 h-32 w-full pointer-events-none bg-linear-to-b from-black to-transparent" />

      <header className="flex w-full flex-col items-center">
        <span
          className="flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400 animate-on-mount"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Technologies
        </span>

        <h2
          className="mt-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl animate-on-mount"
          style={{ animationDelay: "0.3s" }}
        >
          My{" "}
          <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p
          className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base animate-on-mount"
          style={{ animationDelay: "0.4s" }}
        >
          Technologies and tools I use to build responsive and modern frontend
          applications.
        </p>
      </header>

      <ul
        className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 animate-on-mount"
        style={{ animationDelay: "0.5s" }}
      >
        {skills.map((skill) => (
          <li key={skill.name}>
            <article className="flex min-h-36 w-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-700/50 bg-gray-800/50 p-5 text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,165,0,0.15)]">
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 object-contain"
              />
              <h3 className="text-sm font-medium text-white sm:text-base">
                {skill.name}
              </h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
