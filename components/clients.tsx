import { InfiniteMovingCards } from './ui/infinite-moving-cards';

import { companies } from '@/data';
import { testimonials } from '@/data';
const clients = () => (
  <div className="flex flex-col items-center py-20" id="testimonials">
    <h1 className="heading max-w-[65vw]">
      Real testimonials from people <span className="text-purple">I&apos;ve wroked with before</span>
    </h1>
    <div className="flex flex-col items-center max-lg:mt-10 ">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
        {companies.map(({ id, name, img, nameImg }) => (
          <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
            <img src={img} alt={name} className="w-5 md:w-10" />
            <img src={nameImg} alt={name} className="w-20 md:w-24" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default clients;
