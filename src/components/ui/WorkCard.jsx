import TextCard from "./TextCard";
import ImgCard from "./ImgCard";

const work = [
  {
    imgUrl: "./project.png",
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    buttons: ["html", "css", "javascript", "mongoDB"],
    url: "https://github.com/Haliukaaa/1F",
  },
  {
    imgUrl: "./project.png",
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    buttons: ["html", "css"],
    url: "https://github.com/Haliukaaa/1F",
  },
  {
    imgUrl: "./project.png",
    title: "Fiskil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    buttons: ["html"],
    url: "https://github.com/Haliukaaa/1F",
  },
];

export default function WorkCard() {
  return (
    <div className="flex flex-col gap-12 mt-12">
      {work.map((el, index) => (
        <div className="flex flex-col md:flex-row shadow rounded-xl dark:bg-gray-800">
          <TextCard
                title={el.title}
                desc={el.desc}
                buttons={el.buttons}
                url={el.url}
              />
          <ImgCard imgUrl={el.imgUrl} />
        </div>
      ))}
    </div>
  );
}
