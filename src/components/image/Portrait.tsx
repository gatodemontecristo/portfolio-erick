import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Portrait = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <div ref={ref} className="w-1/2 overflow-hidden">
      <motion.div
        style={{ scale }}
        className="h-full bg-[url('./photo-erick.jpeg')] bg-cover bg-center"
      />
    </div>
  );
};
