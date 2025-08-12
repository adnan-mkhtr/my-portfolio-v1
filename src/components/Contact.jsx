import { CONTACT } from '../constants';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mt-20 mb-8 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4 text-lg"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 text-lg"
        >
          {CONTACT.email}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-8 flex items-center justify-center gap-4 text-2xl lg:text-3xl"
        >
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
        </motion.div>
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
