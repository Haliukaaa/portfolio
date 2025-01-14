'use client';
import { useEffect } from 'react';

import { motion, stagger, useAnimate } from 'framer-motion';

import { cn } from '@/utils/cn';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.7,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        duration: duration ? duration : 0.7,
        delay: stagger(0.1),
      },
    );
  }, [scope.current]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={`${idx > 8 ? 'text-purple' : 'text-black dark:text-white'} opacity-0 `}
          style={{
            filter: filter ? 'blur(10px)' : 'none',
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn('font-bold', className)}>
      <div className="my-4">
        <div className=" leading-snug tracking-wide text-black dark:text-white">{renderWords()}</div>
      </div>
    </div>
  );
};