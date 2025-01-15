import React from 'react';

import { Button } from './ui/moving-border';

import { workExperience } from '@/data';
const Exerience = () => (
  <div className="flex flex-col items-center py-20" id="testimonials">
    <h1 className="heading max-w-[65vw]">
      My <span className="text-purple">work experience</span>
    </h1>
    <div className="mt-12 grid w-full grid-cols-2 gap-10 lg:grid-cols-4">
      {workExperience.map((card) => (
        <Button
          key={card.id}
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          className="flex-1 border-neutral-50 text-white dark:border-slate-800"
        >
          <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-grow lg:items-center lg:p-10">
            <img src={card.thumbnail} alt={card.thumbnail} className="w-16 md:w-20 lg:w-32" />
            <div className="lg:ms-5">
              <h1 className="text-start text-lg font-bold md:text-2xl">{card.title}</h1>
              <p className="mt-3 text-start font-semibold text-white-100 ">{card.desc}</p>
            </div>
          </div>
        </Button>
      ))}
    </div>
  </div>
);

export default Exerience;
