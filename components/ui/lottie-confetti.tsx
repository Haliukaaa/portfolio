// components/LottieConfetti.tsx
'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

interface LottieConfettiProps {
  isPlaying: boolean;
}

const LottieConfetti = ({ isPlaying }: LottieConfettiProps) => {
    //eslint-disable-next-line
  const animationData = require('@/data/confetti.json');
  
  return (
    <Lottie
      options={{
        loop: isPlaying,
        autoplay: isPlaying,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }}
    />
  );
};

export default LottieConfetti;