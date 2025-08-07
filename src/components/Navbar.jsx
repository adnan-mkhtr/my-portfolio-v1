import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <p className="text-3xl font-bold">AM</p>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/adnan-mkhtr"
          target="_blank"
          rel="noreferrer noopenner"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://github.com/adnan-mkhtr"
          target="_blank"
          rel="noreferrer noopenner"
          aria-label="Github"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/adnan-mkhtr"
          target="_blank"
          rel="noreferrer noopenner"
          aria-label="Github"
        >
          <FaInstagram />
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
    </nav>
  );
};

export default Navbar;
