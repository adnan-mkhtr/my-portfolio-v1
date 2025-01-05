import { useState } from 'react';
import { getImageUrl } from '../utils';
import closeIcon from '../assets/nav/closeIcon.png';
import menuIcon from '../assets/nav/menuIcon.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { id: 1, text: 'About', href: '#about' },
    { id: 2, text: 'Experience', href: '#experience' },
    { id: 3, text: 'Projects', href: '#projects' },
    { id: 4, text: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="relative flex items-center justify-between pt-[61px] z-[2] mx-[10%]">
      <a className="text-3xl font-semibold no-underline text-text" href="/">
        Portfolio
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex text-2xl text-text gap-12">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.href} className="no-underline">
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div onClick={handleMenu} className="block md:hidden">
        {menuOpen ? (
          <img src={closeIcon} alt="Menu button" />
        ) : (
          <img src={menuIcon} alt="Menu button" />
        )}
      </div>

      {/* Mobile Navigation Menu*/}
      <ul
        className={
          menuOpen
            ? 'fixed md:hidden left-0 top-4 w-[60%] h-full border-r border-r-gray-900 bg-dark2 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <a
          className=" p-4 text-3xl font-semibold no-underline text-text"
          href="/"
        >
          Portfolio
        </a>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="mt-4 p-4 border-b text-text cursor-pointer border-gray-600"
          >
            <a href={item.href} className="no-underline">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      {/* <div className="flex">
        <img
          className={`cursor-pointer md:hidden`}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center gap-3 md:gap-12 list-none  p-6 md:p-0 rounded-lg shadow-md md:shadow-none absolute top-full right-0 md:relative`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about" className="text-2xl text-text no-underline">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-2xl text-text no-underline">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-2xl text-text no-underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-2xl text-text no-underline">
              Contact
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default Navbar;
