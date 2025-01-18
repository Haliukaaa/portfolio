import { InfiniteMovingCards } from './ui/infinite-moving-cards';


import { testimonials } from '@/data';
const clients = () => (
  <div className="flex flex-col items-center py-20" id="testimonials">
    <h1 className="heading max-w-[65vw]">
      Real testimonials from<span className="text-purple"> people I&apos;ve wroked with</span>
    </h1>
    <div className="flex flex-col items-center max-lg:mt-10 ">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
      </div>
    </div>
  </div>
);

export default clients;
