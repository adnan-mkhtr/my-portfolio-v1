import { CONTACT } from '../constants';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  return (
    <section id="contact" className="border-t border-stone-900 pb-20">
      <h2 className="mt-20 mb-8 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-lg">{CONTACT.phoneNo}</p>
        <p className="my-4 text-lg">{CONTACT.email}</p>
        <div className="my-8 flex items-center justify-center gap-4 text-2xl lg:text-3xl">
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
        </div>
        {/* <a
          href="https://github.com/adnan-mkhtr"
          target="_blank"
          rel="noreferrer noopenner"
          aria-label="Github"
          >
          <FaInstagram />
        </a> */}
      </div>
    </section>
  );
};

export default Contact;
