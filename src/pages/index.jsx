import {
  Header,
  About,
  Experience,
  Footer,
  Profile,
  Skills,
  Work,
  GetInTouch,
} from "../components/layout/index";
import Menu from "../components/ui/Menu";
import { useRef, useState, useEffect } from "react";
import useDownloader from "react-use-downloader";

export default function Home() {
  // download CV
  const { download } = useDownloader();
  const fileUrl = "./khaliun_resume.pdf";
  const filename = "khaliun_resume.pdf";

  const downloadCV = () => {
    download(fileUrl, filename);
  };

  // scroll to sections
  const innerRef = useRef(null);
  const expRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const handleClick = () => {
    innerRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickExp = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const clickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // dark mode
  const [darkMode, setDarkMode] = useState("light");

  const handleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative overflow-hidden">
      <Menu fileUrl={fileUrl} filename={filename} download={downloadCV} handleClick={handleClick}
            clickExp={clickExp}
            clickWork={clickWork}
            clickContact={clickContact}
            darkMode={darkMode}
            handleDarkMode={handleDarkMode}/>
      <div className="dark:bg-slate-950">
        <div className="container max-w-screen-xl mx-auto">
          <Header
            className="max-w-screen-xl"
            fileUrl={fileUrl}
            filename={filename}
            download={downloadCV}
            darkMode={darkMode}
            handleDarkMode={handleDarkMode}
            handleClick={handleClick}
            clickExp={clickExp}
            clickWork={clickWork}
            clickContact={clickContact}
          />
        </div>
      </div>
      <div className="dark:bg-slate-950">
        <div className="container max-w-screen-xl mx-auto">
          <Profile
            className="max-w-screen-xl"
            darkMode={darkMode}
            handleDarkMode={handleDarkMode}
          />
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-screen-xl mx-auto">
          <About className="max-w-screen-xl" innerRef={innerRef} />
        </div>
      </div>
      <Skills darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-screen-xl mx-auto">
          <Experience
            className="max-w-screen-xl"
            expRef={expRef}
            darkMode={darkMode}
          />
        </div>
      </div>
      <div className="dark:bg-slate-950">
        <div className="container max-w-screen-xl mx-auto">
          <Work className="max-w-screen-xl" workRef={workRef} />
        </div>
      </div>
      <GetInTouch
        contactRef={contactRef}
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-screen-xl mx-auto">
          <Footer
            className="max-w-screen-xl"
            contactRef={contactRef}
            darkMode={darkMode}
            handleDarkMode={handleDarkMode}
          />
        </div>
      </div>
    </div>
  );
}
