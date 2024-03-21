import useDownloader from "react-use-downloader";
import { useState, useEffect } from "react";

export const Header = ({ handleClick, clickExp, clickWork, clickContact, handleDarkMode, darkMode, fileUrl, filename, download }) => {
  


  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="navbar flex gap-8 justify-end py-5 px-20 dark:bg-slate-950">
      <div className="nav-right invisible sm:visible">
        <ul className="menu flex gap-4 *:dark:white-text">
          <li onClick={handleClick}>About</li>
          <li onClick={clickExp}>Experience</li>
          <li onClick={clickWork}>Work</li>
          <li onClick={clickContact}>Contact</li>
        </ul>
      </div>
      <div className="nav-left flex gap-3 invisible sm:visible">
        <div onClick={handleDarkMode}>
        {darkMode === "dark" ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M12 3C10.8065 4.19347 10.136 5.81217 10.136 7.5C10.136 9.18783 10.8065 10.8065 12 12C13.1935 13.1935 14.8122 13.864 16.5 13.864C18.1878 13.864 19.8065 13.1935 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3Z"
                stroke="#D1D5DB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M19 3V7"
                stroke="#D1D5DB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M21 5H17"
                stroke="#D1D5DB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M12 2V4"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M12 20V22"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M4.92993 4.92999L6.33993 6.33999"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_5"
                d="M17.6599 17.66L19.0699 19.07"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_6"
                d="M2 12H4"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_7"
                d="M20 12H22"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_8"
                d="M6.33993 17.66L4.92993 19.07"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_9"
                d="M19.0699 4.92999L17.6599 6.33999"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        )}
        </div>
        <div
          className="py-1 px-5 rounded-xl w-fit bg-slate-950 dark:bg-slate-300 dark:text-gray-900 text-gray-50 hover:cursor-pointer"
          onClick={download}
        >
          Download CV
        </div>
      </div>
    </div>
  );
};
