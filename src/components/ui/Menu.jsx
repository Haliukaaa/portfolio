import { useState } from "react";

const Menu = ({
  download,
  handleClick,
  clickExp,
  clickWork,
  clickContact,
  darkMode,
  handleDarkMode,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  const handleOpen = () => {
    setShowMenu(!showMenu);

    setTimeout(() => {
      setshowSideBar(!showSideBar);
    }, 10);

    document.body.classList.toggle("menu-open", !showMenu);
  };

  const handleClose = () => {
    setshowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);

    document.body.classList.toggle("menu-open", !showMenu);
  };

  const handleScrollTo = (scroll) => {
    if (window.innerWidth <= 768) {
      handleClose();
    }

    scroll();
  };

  return (
    <>
      {/* Menu button */}
      <div
        className="flex flex-col gap-1 absolute right-4 top-6 sm:invisible"
        onClick={handleOpen}
      >
        <div className="w-[22px] h-[2px] bg-black dark:bg-white rounded-sm"></div>
        <div className="w-[22px] h-[2px] bg-black dark:bg-white rounded-sm"></div>
        <div className="w-[22px] h-[2px] bg-black dark:bg-white rounded-sm"></div>
      </div>

      {showMenu && (
        <>
          {/* idk background */}
          <div
            onClick={handleClose}
            className="h-screen w-[100vw] absolute top-0 left-0 transition-all duration-300  ease-in-out"
          ></div>
          {/* Menu - extended */}
          <div
            className={`h-screen w-[80vw] bg-white dark:bg-slate-950 absolute top-0 right-0 shadow-menu dark:light-menu overflow-hidden menu-open ${
              showSideBar ? "translate-x-0" : "translate-x-[100vw]"
            } transition-transform duration-300  ease-in-out`}
          >
            <div className="flex justify-between p-4">
              {/* logo */}
              <div>
                <svg
                  width="73"
                  height="22"
                  viewBox="0 0 73 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.15625 11.8835V8.88352L12.1562 3.59943V7.05114L3.94034 10.3494L4.05114 10.1705V10.5966L3.94034 10.4176L12.1562 13.7159V17.1676L0.15625 11.8835ZM24.8183 6.56534C24.7501 5.87784 24.4575 5.34375 23.9405 4.96307C23.4234 4.58239 22.7217 4.39204 21.8353 4.39204C21.2331 4.39204 20.7245 4.47727 20.3098 4.64773C19.895 4.8125 19.5768 5.04261 19.3552 5.33807C19.1393 5.63352 19.0314 5.96875 19.0314 6.34375C19.02 6.65625 19.0853 6.92898 19.2274 7.16193C19.3751 7.39489 19.5768 7.59659 19.8325 7.76705C20.0882 7.93182 20.3836 8.0767 20.7189 8.2017C21.0541 8.32102 21.412 8.4233 21.7927 8.50852L23.3609 8.88352C24.1223 9.05398 24.8211 9.28125 25.4575 9.56534C26.0939 9.84943 26.645 10.1989 27.1109 10.6136C27.5768 11.0284 27.9376 11.517 28.1933 12.0795C28.4547 12.642 28.5882 13.2869 28.5939 14.0142C28.5882 15.0824 28.3155 16.0085 27.7757 16.7926C27.2416 17.571 26.4689 18.1761 25.4575 18.608C24.4518 19.0341 23.2388 19.2472 21.8183 19.2472C20.4092 19.2472 19.1819 19.0312 18.1365 18.5994C17.0967 18.1676 16.2842 17.5284 15.699 16.6818C15.1194 15.8295 14.8155 14.7756 14.787 13.5199H18.3581C18.3978 14.1051 18.5655 14.5937 18.8609 14.9858C19.162 15.3722 19.5626 15.6648 20.0626 15.8636C20.5683 16.0568 21.1393 16.1534 21.7757 16.1534C22.4007 16.1534 22.9433 16.0625 23.4035 15.8807C23.8694 15.6989 24.2302 15.446 24.4859 15.1222C24.7416 14.7983 24.8694 14.4261 24.8694 14.0057C24.8694 13.6136 24.753 13.2841 24.52 13.017C24.2927 12.75 23.9575 12.5227 23.5143 12.3352C23.0768 12.1477 22.5399 11.9773 21.9035 11.8239L20.003 11.3466C18.5314 10.9886 17.3694 10.429 16.5172 9.66761C15.6649 8.90625 15.2416 7.88068 15.2473 6.59091C15.2416 5.53409 15.5228 4.6108 16.091 3.82102C16.6649 3.03125 17.4518 2.41477 18.4518 1.97159C19.4518 1.52841 20.5882 1.30682 21.8609 1.30682C23.1564 1.30682 24.287 1.52841 25.253 1.97159C26.2245 2.41477 26.9802 3.03125 27.52 3.82102C28.0598 4.6108 28.3382 5.52557 28.3552 6.56534H24.8183ZM40.0649 6.56534C39.9967 5.87784 39.7041 5.34375 39.187 4.96307C38.67 4.58239 37.9683 4.39204 37.0819 4.39204C36.4796 4.39204 35.9711 4.47727 35.5563 4.64773C35.1416 4.8125 34.8234 5.04261 34.6018 5.33807C34.3859 5.63352 34.2779 5.96875 34.2779 6.34375C34.2666 6.65625 34.3319 6.92898 34.4739 7.16193C34.6217 7.39489 34.8234 7.59659 35.0791 7.76705C35.3347 7.93182 35.6302 8.0767 35.9654 8.2017C36.3007 8.32102 36.6586 8.4233 37.0393 8.50852L38.6075 8.88352C39.3688 9.05398 40.0677 9.28125 40.7041 9.56534C41.3404 9.84943 41.8916 10.1989 42.3575 10.6136C42.8234 11.0284 43.1842 11.517 43.4399 12.0795C43.7012 12.642 43.8347 13.2869 43.8404 14.0142C43.8347 15.0824 43.562 16.0085 43.0222 16.7926C42.4882 17.571 41.7154 18.1761 40.7041 18.608C39.6984 19.0341 38.4853 19.2472 37.0649 19.2472C35.6558 19.2472 34.4285 19.0312 33.383 18.5994C32.3433 18.1676 31.5308 17.5284 30.9455 16.6818C30.366 15.8295 30.062 14.7756 30.0336 13.5199H33.6046C33.6444 14.1051 33.812 14.5937 34.1075 14.9858C34.4086 15.3722 34.8092 15.6648 35.3092 15.8636C35.8149 16.0568 36.3859 16.1534 37.0222 16.1534C37.6472 16.1534 38.1899 16.0625 38.6501 15.8807C39.116 15.6989 39.4768 15.446 39.7325 15.1222C39.9882 14.7983 40.116 14.4261 40.116 14.0057C40.116 13.6136 39.9995 13.2841 39.7666 13.017C39.5393 12.75 39.2041 12.5227 38.7609 12.3352C38.3234 12.1477 37.7864 11.9773 37.1501 11.8239L35.2495 11.3466C33.7779 10.9886 32.616 10.429 31.7637 9.66761C30.9114 8.90625 30.4882 7.88068 30.4938 6.59091C30.4882 5.53409 30.7694 4.6108 31.3376 3.82102C31.9114 3.03125 32.6984 2.41477 33.6984 1.97159C34.6984 1.52841 35.8347 1.30682 37.1075 1.30682C38.4029 1.30682 39.5336 1.52841 40.4995 1.97159C41.4711 2.41477 42.2268 3.03125 42.7666 3.82102C43.3063 4.6108 43.5847 5.52557 43.6018 6.56534H40.0649ZM58.4515 0.727272L52.8265 21.625H49.6986L55.3236 0.727272H58.4515ZM72.4281 13.5199L60.4281 18.804V15.3523L68.644 12.054L68.5332 12.233V11.8068L68.644 11.9858L60.4281 8.6875V5.23579L72.4281 10.5199V13.5199Z"
                    fill={darkMode === "dark" ? "white" : "#111827"}
                  />
                </svg>
              </div>
              {/* x button */}
              <div onClick={handleClose}>
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
                      d="M18 6L6 18"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M6 6L18 18"
                      stroke="#4B5563"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            {/* Menu */}
            <div className="border-t-2 p-4 flex flex-col gap-4">
              <ul className="flex flex-col gap-4 *:dark:white-text">
                <li onClick={() => handleScrollTo(handleClick)}>About</li>
                <li onClick={() => handleScrollTo(clickExp)}>Experience</li>
                <li onClick={() => handleScrollTo(clickWork)}>Work</li>
                <li onClick={() => handleScrollTo(clickContact)}>Contact</li>
              </ul>
            </div>
            <div className="border-t-2 p-4 flex flex-col gap-4">
              <div onClick={handleDarkMode} className="flex justify-between">
                <p className="dark:white-text">Switch Theme</p>
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
              {/* download button */}
              <div
                className="py-1 px-5 rounded-xl w-full text-center bg-slate-950 dark:bg-slate-300 dark:text-gray-900 text-gray-50 hover:cursor-pointer"
                onClick={download}
              >
                Download CV
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
