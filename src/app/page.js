'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const NUM_IMAGES = 500;

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export default function HomePage() {
  const images = Array.from({ length: NUM_IMAGES });

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#f0f8ff' }}>
      {images.map((_, index) => {
        const left = getRandom(0, 100); // % from left
        const delay = getRandom(0, 5); // s
        const duration = getRandom(4, 10); // s
        const size = getRandom(40, 80); // px

        const rotateDuration = getRandom(5, 15); // s

        return (
          <motion.div
            key={index}
            initial={{ y: -100 }}
            animate={{
              y: '110vh',
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
            }}
            transition={{
              y: {
                delay,
                duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear'
              },
              rotateX: {
                duration: rotateDuration,
                repeat: Infinity,
                ease: 'linear'
              },
              rotateY: {
                duration: rotateDuration,
                repeat: Infinity,
                ease: 'linear'
              },
              rotateZ: {
                duration: rotateDuration,
                repeat: Infinity,
                ease: 'linear'
              },
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: `${left}%`,
              width: size,
              height: size,
              pointerEvents: 'none',
              transformStyle: 'preserve-3d',
              perspective: 1000,
            }}
          >
            <Image src="/images/aa.jpeg" alt="falling" width={size} height={size} />
          </motion.div>
        );
      })}
    </div>
  );
}
