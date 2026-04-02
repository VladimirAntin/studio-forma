'use client';
import {useScroll} from 'framer-motion';
import {motion} from 'framer-motion';

export default function ScrollProgress() {
  const {scrollYProgress} = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(to right, #c9a870, #87a090)',
        zIndex: 100,
      }}
    />
  );
}
