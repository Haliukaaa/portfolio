import { FaLocationArrow } from 'react-icons/fa';

import { PinContainer } from './ui/ui-container';

import { projects } from '@/data';

const RecentProjects = () => (
  <div className="py-20" id="projects">
    <h1 className="heading">
      Selection of my <span className="text-purple">recent projects</span>
    </h1>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-10 p-4">
      {projects.map(({ id, title, des, img, iconLists, link }) => (
        <div
          key={id}
          className="md:w-[400px] flex h-[30rem] w-[80vw] items-center justify-center sm:w-96"
        >
          <PinContainer title={link} href={link}>
            <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:w-[400px]">
              <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                <img src="/bg.png" alt="bg-img" />
              </div>
              <img src={img} alt={title} className="absolute bottom-0 z-10" />
            </div>
            <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
              {title}
            </h1>
            <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
              {des}
            </p>
            <div className="mb-3 mt-7 flex items-center justify-between">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <img src={icon} alt={icon} className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                  Visit
                </p>
                <FaLocationArrow className="color-[#cbacf9] ms-3" />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  </div>
);

export default RecentProjects;
