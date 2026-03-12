import { Code2, Lightbulb, Rocket, type LucideIcon } from "lucide-react";

interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: Code2,
    title: "Modern Frontend Stack",
    description:
      "Experience building applications with React, TypeScript, JavaScript, Tailwind CSS, and Redux following modern frontend practices.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Strong interest in Data Structures and Algorithms including arrays, linked lists, stacks, queues, and common searching and sorting techniques.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Nearly two years dedicated to studying frontend development and improving through projects and algorithm practice.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-dvh w-full flex-col justify-center overflow-hidden bg-linear-to-br from-gray-900 via-gray-900 to-gray-900 px-6 pt-28 pb-16 md:px-14 lg:px-40"
    >
      <div className="absolute top-0 left-0 h-32 w-full pointer-events-none bg-linear-to-b from-black to-transparent" />

      <div className="flex w-full flex-col items-center">
        <span
          className="flex w-fit items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-sm text-orange-400 animate-on-mount"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="h-2 w-2 rounded-full bg-orange-500" />
          Get to Know Me
        </span>

        <h2
          className="mt-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl animate-on-mount"
          style={{ animationDelay: "0.3s" }}
        >
          About{" "}
          <span className="bg-linear-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      <div className="mt-12 flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
        <article
          className="w-full lg:w-1/2 animate-on-mount"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="mb-5 text-center text-base leading-relaxed text-gray-300 sm:text-lg lg:text-left">
            Hi! I&apos;m{" "}
            <span className="font-semibold text-orange-500">Otoniel</span>, a
            Junior Frontend Developer from Guatemala focused on building modern,
            responsive, and interactive web applications.
          </p>

          <p className="mb-5 text-center text-base leading-relaxed text-gray-300 sm:text-lg lg:text-left">
            My main stack includes{" "}
            <span className="font-semibold text-orange-400">React</span>,{" "}
            <span className="font-semibold text-orange-400">TypeScript</span>,{" "}
            and{" "}
            <span className="font-semibold text-orange-400">JavaScript</span>,
            along with tools like Tailwind CSS, Git, and Redux.
          </p>

          <p className="text-center text-base leading-relaxed text-gray-300 sm:text-lg lg:text-left">
            For nearly two years I&apos;ve been studying frontend development
            while strengthening my problem-solving skills through Data
            Structures and Algorithms.
          </p>
        </article>

        <div
          className="flex w-full flex-col gap-4 lg:w-1/2 animate-on-mount"
          style={{ animationDelay: "0.5s" }}
        >
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex w-full items-start gap-4 rounded-xl border border-gray-700/50 bg-gray-800/50 p-5 backdrop-blur-sm"
            >
              <div className="rounded-lg bg-orange-500/10 p-2 shrink-0">
                <item.icon
                  className="h-5 w-5 text-orange-500"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
