const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 pt-1 border-b-2 border-stone-700 backdrop-blur-lg shadow-lg">
      <div className="flex items-center justify-between px-16">
        <div className="flex flex-shrink-0 items-center">
          <a href="#hero" aria-label="Home">
            <p className="text-lg lg:text-3xl font-bold hover:text-white hover:-translate-y-1 transition">
              AM
            </p>
          </a>
        </div>
        <div className="m-4 flex items-center justify-center gap-2 lg:gap-4 text-md lg:text-xl">
          {/* <a
            href="#hero"
            rel="noreferrer noopenner"
            aria-label="Home"
            className="hover:text-white transition-all"
          >
            Home
          </a> */}
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
    </nav>
  );
};

export default Navbar;
