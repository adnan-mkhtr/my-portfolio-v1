import { useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import profilePic from '../assets/adnanProfile2-copy.jpg';
import { HERO_CONTENT, NAME } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const titles = ['Frontend Developer', 'Software Engineer', 'Web Developer'];

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, staggerChildren: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const name = NAME.split(' ');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="pt-4 pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Adnan Mukhtar"
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                x: { duration: 1, delay: 1.5 },
                y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{ rotate: 1.5, scale: 1.03 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl flex gap-4">
              {name.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                // variants={childVariants}
                className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                {titles[index]}
              </motion.span>
            </AnimatePresence>
            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href="/AdnanMukhtar_CV.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px rgba(255,255,255,0.15)',
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white rounded-full px-6 py-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiDownload />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
