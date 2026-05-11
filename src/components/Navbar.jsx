import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-40 pt-1 border-b-2 border-stone-700 backdrop-blur-lg shadow-lg">
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-16">
        <div className="flex flex-shrink-0 items-center">
          <a href="#hero" aria-label="Home">
            <p className="text-xl lg:text-3xl font-bold hover:text-white hover:-translate-y-1 transition">
              AM
            </p>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl text-stone-300 hover:text-white focus:outline-none transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-6 text-sm lg:text-xl">
          <a
            href="#tech"
            rel="noreferrer noopenner"
            aria-label="Tech"
            className="hover:text-white hover:-translate-y-1 transition"
          >
            Tech
            {/* <FaLinkedin /> */}
          </a>
          <a
            href="#experience"
            rel="noreferrer noopenner"
            aria-label="Experience"
            className="hover:text-white hover:-translate-y-1 transition"
          >
            Experience
          </a>
          <a
            href="#projects"
            rel="noreferrer noopenner"
            aria-label="Projects"
            className="hover:text-white hover:-translate-y-1 transition"
          >
            Projects
            {/* <FaInstagram /> */}
          </a>
          <a
            href="#contact"
            rel="noreferrer noopenner"
            aria-label="Contact"
            className="hover:text-white hover:-translate-y-1 transition"
          >
            Contact
            {/* <FaInstagram /> */}
          </a>
          {/* <a
          href="https://github.com/adnan-mkhtr"
          target="_blank"
          rel="noreferrer noopenner"
          aria-label="Github"
          >
          <FaGithub />
        </a> */}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/80 backdrop-blur-lg border-b-2 border-stone-700 absolute w-full left-0 top-[100%] shadow-xl transition-all">
          <a
            href="#tech"
            onClick={toggleMenu}
            rel="noreferrer noopenner"
            aria-label="Tech"
            className="text-lg text-stone-300 hover:text-white transition"
          >
            Tech
          </a>
          <a
            href="#experience"
            onClick={toggleMenu}
            rel="noreferrer noopenner"
            aria-label="Experience"
            className="text-lg text-stone-300 hover:text-white transition"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            rel="noreferrer noopenner"
            aria-label="Projects"
            className="text-lg text-stone-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            rel="noreferrer noopenner"
            aria-label="Contact"
            className="text-lg text-stone-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
