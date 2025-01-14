'use client';
import React, { useState } from 'react';

import { IoCopyOutline } from 'react-icons/io5';
import Lottie from 'react-lottie';

import { BackgroundGradientAnimation } from './gradient-bg';
import { GlobeDemo } from './grid-globe';
import MagicButton from './magic-button';

import animationData from '@/data/confetti.json';
import { cn } from '@/utils/cn';

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <div className={cn('mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ', className)}>{children}</div>
);

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('80234566');
    setCopied(true);
  };
  return (
    <div
      className={cn(
        'group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl  border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none',
        className,
      )}
      style={{ background: 'rgb(4,7,29)', backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)' }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="absolute h-full w-full">
          {img && <img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')} />}
        </div>
        <div className={`absolute -bottom-5 right-0 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && <img src={spareImg} alt={spareImg} className="object-cover, h-full w-full object-center" />}
        </div>
        <div>
          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 flex items-center justify-center font-bold text-white" /> */}
            </BackgroundGradientAnimation>
          )}
          <div
            className={cn(
              titleClassName,
              'relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10',
            )}
          >
            <div className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">{description}</div>
            <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl ">{title}</div>

            {id === 2 && <GlobeDemo />}
            {id === 3 && (
              <div className="absolute top-0 -right-3 flex w-fit gap-1 lg:-right-2 lg:gap-5">
                <div className="flex flex-col gap-3 lg:gap-8">
                  {['React.js', 'Next.js', 'Typescript'].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center" />
                </div>
                <div className="flex flex-col gap-3 lg:gap-8">
                  <span className="rounded-lg bg-[#10132E] px-3 py-4 text-center" />
                  {['MongoDB', 'TailwindCSS', 'RestAPI'].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:py-4 lg:text-base lg:opacity-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {id === 6 && (
              <div className="relative mt-5">
                <div className="absolute -bottom-5 right-0">
                  <Lottie
                    options={{ loop: copied, autoplay: copied, animationData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }}
                  />
                </div>
                <MagicButton
                  title={copied ? 'Phone number copied' : 'Copy phone number'}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[161a31]"
                  handleClick={handleCopy}
                />
              </div>
            )}
          </div>
        </div>
        <div className="transition duration-200 group-hover/bento:translate-x-2"></div>
      </div>
    </div>
  );
};