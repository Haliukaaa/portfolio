
'use client';

import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

interface LottieWrapperProps {
  //eslint-disable-next-line
  animationData: any;
  height?: number;
  width?: number;
}

const LottieWrapper = ({ animationData, height = 400, width = 400 }: LottieWrapperProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieWrapper;