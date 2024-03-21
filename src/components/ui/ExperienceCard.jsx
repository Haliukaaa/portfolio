export default function ExperienceCard({logo, title, desc, date}) {
    return(
        <div className="bg-white flex flex-col sm:flex-row gap-16 p-8 rounded-xl shadow justify-between dark:bg-gray-800">
            <div className="img w-28">
                <img src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold dark:white-title">{title}</h1>
                <p className="dark:white-text">{desc}</p>
            </div>
            <div className="date">
                <p className="dark:white-text">{date}</p>
            </div>
        </div>
    );
};