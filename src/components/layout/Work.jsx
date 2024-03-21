import Button from '../ui/Button';
import WorkCard from '../ui/WorkCard';

export const Work = ({workRef}) => {
    return (
      <div ref={workRef} className='padding dark:bg-slate-950'>
        <div className="text-container">
          <Button buttonText={"Work"}/>
          <p className='text-center text-lg lg:text-xl dark:white-text'>Some of the noteworthy projects I have built:</p>
        </div>
        <WorkCard/>
      </div>
    );
  };