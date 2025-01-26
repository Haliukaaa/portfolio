'use client';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';
import MagicButton from './ui/magic-button';
import { useState } from 'react';
import { socialMedia } from '@/data';
import { IoCopyOutline } from 'react-icons/io5';

export const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('80234566');
    setCopied(true);
  };
  return (
 
  <footer className="mb-[100px] w-full pb-10 md:mb-5" id="contact">
    <div className="flex flex-col items-center ">
      <h1 className="heading lg:max-w-[45vw]">
        Ready to take <span>your digital prescence</span> to the next level?
      </h1>
      <p className="my-5 text-center text-white-200 md:mt-10">
        Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
      </p>
      <Link href="mailto:haliuka.aqua@gmail.com" className='mb-4'>
        <MagicButton title="Send an email" icon={<FaLocationArrow />} position="right"></MagicButton>
      </Link>
      <MagicButton
          title={copied ? 'Phone number copied' : 'Copy phone number'}
          icon={<IoCopyOutline />}
          position="left"
          otherClasses="!bg-[161a31]"
          buttonClass='!w-fit'
          handleClick={handleCopy}
        />
    </div>
    <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
      <p className="text-sm font-light md:text-base md:font-normal">Copyright © 2024 Haliuka&apos;s experimental portfolio coded with love and hours of frustration! 🩵</p>
      <div className="flex items-center gap-6 md:gap-3">
        {socialMedia.map((profile) => (
          <Link href={profile.link}
            key={profile.id}
            className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg  border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
          >
            <img src={profile.img} alt={profile.img} width={20} height={20} />
          </Link>
        ))}
      </div>
    </div>
  </footer>
)};
