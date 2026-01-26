import React, { useState, useEffect } from "react";
import { navlist } from "../utils/constants";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectPortfolioSlice, setIsDarkMode } from "../portfolioSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(selectPortfolioSlice);

  console.log(isDarkMode);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`${isDarkMode ? `bg-gray-400/10 border-gray-200/30` : `border-gray-300`} fixed p-4 rounded-2xl top-6 border shadow bg-opacity-90 backdrop-blur-sm z-50 transition-transform w-fit lg:w-1/3 duration-500 ease-in-out 
      ${isVisible ? "translate-y-0" : "-translate-y-40"}`}
    >
      <div className="px-3">
        <div className="flex justify-between items-center gap-22">
          <ul className="flex items-center gap-8">
            {navlist?.map((data) => {
              return (
                <li className="" key={`${data?.navText}+${data?.id}`}>
                  <a
                    href="#home"
                    className={`${isDarkMode ? `text-white hover:text-violet-400` : `text-gray-500 hover:text-violet-400`} transition-colors ease-in-out duration-300`}
                  >
                    {data?.icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(setIsDarkMode(!isDarkMode));
            }}
          >
            {isDarkMode ? (
              <AiOutlineSun className="w-6 h-6 dark:text-white hover:text-violet-400" />
            ) : (
              <AiOutlineMoon className="w-6 h-6 text-gray-500 hover:text-violet-400" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
