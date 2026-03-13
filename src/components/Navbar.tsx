import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-16 fixed flex justify-center top-4 z-50">
      <motion.nav
        ref={navRef}
        className="relative bg-linear-to-br from-gray-700 to-black flex justify-between items-center px-8 w-[90%] md:w-3/4 h-full rounded-full"
        initial={{ opacity: 0, y: -60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a
          href="#home"
          className="text-white text-xl font-bold hover:scale-125 transition-transform duration-300"
        >
          Portfolio
        </a>

        <ul className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="text-white hover:scale-110 transition-transform duration-300 hover:text-orange-400"
            >
              <a href={item.link} className="no-underline">
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-5">
          <a
            href="#contact"
            className="hidden md:flex bg-linear-to-br from-orange-500 to-amber-500 text-white font-bold py-2 px-6 rounded-full hover:scale-110 transition-transform duration-300"
          >
            <span>Get In Touch</span>
          </a>

          <button
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-600 text-white w-9 h-9 rounded-xl flex items-center justify-center lg:hidden transition-colors duration-200"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <section
            id="mobile-menu"
            className="block lg:hidden absolute top-full left-0 right-0 m-2 rounded-xl bg-gray-800"
          >
            <ul className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="group flex w-full items-center justify-center rounded-lg py-3 text-white transition-colors hover:bg-gray-700"
                  >
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-2 group-hover:text-orange-400">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}

              <li className="md:hidden">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="group flex w-full items-center justify-center rounded-lg bg-linear-to-br from-orange-500 to-amber-500 py-4 text-white"
                >
                  <span className="transition-transform duration-200 group-hover:scale-125 group-hover:font-bold">
                    Get In Touch
                  </span>
                </a>
              </li>
            </ul>
          </section>
        )}
      </motion.nav>
    </header>
  );
}
