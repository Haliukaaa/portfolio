const TechStack = (props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center items-center dark:white-text w-[52px] h-[52px] sm:w-[64px] md:h-[64px]">{props.logo}</div>
      <p className="text-center text-base lg:text-lg dark:white-text">{props.name}</p>
    </div>
  );
};

export default TechStack;
