'use client';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { CanvasRevealEffect } from './ui/canvas-reveal-effect';

const Approach = () => (
  <section
    className="
  w-full py-20"
  >
    <h1 className="heading">
      My <span className="text-purple">approch</span>
    </h1>
    <div className=" my-20 flex flex-col items-center justify-center gap-4 lg:flex-row">
      <Card title="Think, Plan, Procrastinate" description="Before writing code, I break problems into smaller pieces and accidentally overthink it!" icon={<AceternityIcon order="Phase 1" />}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <Card title="Code Like the Junior Dev I am" description="I write logical, clean code with my trusted partner ChatGPT and with burning hatred for bugs!" icon={<AceternityIcon order="Phase 2" />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
      </Card>
      <Card title="Mental breakdown, Abandon" description="Wait wait wait. I'm just joking. I meant to say I polish, perfect my code before publishing. Sauce is trust me bro." icon={<AceternityIcon order="Phase 3" />}>
        <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
      </Card>
    </div>
  </section>
);

export default Approach;

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card relative mx-auto flex h-[30rem] w-full max-w-sm items-center  justify-center rounded-3xl border border-black/[0.2] p-4 dark:border-white/[0.2] lg:h-[35rem]"
    >
      <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 h-full w-full">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="absolute left-[50%] top-[50%] mx-auto flex w-full -translate-x-[50%] -translate-y-[50%] items-center justify-center text-center  transition duration-200 group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0">
          {icon}
        </div>
        <h2 className={`relative z-10 mt-4 text-3xl font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white ${title === "Mental breakdown, Abandon" ? "line-through" : ""}`}>
          {title}
        </h2>
        <h2
          style={{ color: '#e4ecff' }}
          className="relative z-10 mt-4 text-sm font-bold text-black opacity-0 transition  duration-200 group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:text-white group-hover/canvas-card:opacity-100 dark:text-white"
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => (
  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold text-white backdrop-blur-3xl">
      {order}
    </span>
  </button>
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
// eslint-disable-next-line
export const Icon: React.FC<IconProps> = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
