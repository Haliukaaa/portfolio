export const Footer = ({darkMode}) => {
    return <div className="bg-slate-50 flex justify-center gap-2 py-6 sm:px-20 dark:bg-gray-900 items-center">
      <p style={{color: darkMode === "dark" ? "#D1D5DB" : "#4B5563"}}>
        ©
      </p>
      <p className="text-xs sm:text-sm dark:white-text">2023 | Designed and coded with ❤️️  by Sagar Shah</p>
    </div>;
};