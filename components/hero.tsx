import { FaLocationArrow } from 'react-icons/fa';

import MagicButton from './ui/magic-button';
import { Spotlight } from './ui/spotlight';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = () => (
  <div className="pb-20 pt-36">
    <div>
      <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white"></Spotlight>
      <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="purple"></Spotlight>
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue"></Spotlight>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">Haliuka&apos;s experimental portfolio</h2>
          <TextGenerateEffect
            words="Is coding difficult? Yes. But do I give up? NO."
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Heya 😽 I&apos;m Haliuka! An aspiring full-stack developer based in Mongolia
          </p>
          <a href="/hsdifhi">
            <MagicButton title="See my disastrous work" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
