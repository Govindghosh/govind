import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BackgroundBeamsWithCollision } from './ui/background-beams';
import { HiDownload, HiMail } from 'react-icons/hi';

const roles = [
  'Full Stack Developer',
  'Java Developer', 
  'Website Developer',
  'React Developer',
  'Web Developer',
  'MERN Stack Expert'
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentWord = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2300);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 700);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleScroll = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
      <section id="home" className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
              className="order-2 lg:order-1 text-left z-10"
            >
              <div className="space-y-5 lg:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
                >
                  Hi, I'm <span className="gradient-text">Govind Ghosh</span>
                </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground"
                >
                  <span className="text-primary">{displayText}</span>
                  {showCursor && <span className="typewriter-cursor"></span>}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
                  className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                >
                  Govind Ghosh is a professional Full Stack Developer specializing in React, Java, Node.js, and MERN stack technologies. I help businesses scale with modern web applications and deliver exceptional digital experiences.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.45, ease: 'easeOut' }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleScroll('#contact')}
                    className="btn-hero flex items-center gap-2"
                  >
                    <HiMail className="w-5 h-5" />
                    Hire Me
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleScroll('#projects')}
                    className="btn-hero-outline flex items-center gap-2"
                  >
                    View Projects
                  </motion.button>

                  <motion.a
                    href="/govindghosh.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 text-accent-light border border-accent-light rounded-lg hover:bg-accent-light hover:text-background transition-all duration-300"
                  >
                    <HiDownload className="w-5 h-5" />
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.25, ease: 'easeOut' }}
              className="order-1 lg:order-2 relative mx-auto lg:mx-0 w-44 h-44 sm:w-64 sm:h-64 lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem]"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden z-0">
                <img
                  src="/govindghosh.png"
                  alt="Govind Ghosh - Professional Full Stack Developer and React Specialist"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="hidden lg:flex justify-center mt-16"
            aria-hidden
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-primary rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}