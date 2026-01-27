import React, { useState, useEffect, useRef } from "react";
import { navlist } from "../utils/constants";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectPortfolioSlice, setTheme } from "../portfolioSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectPortfolioSlice);

  console.log(theme);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleRef = useRef(null);

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
      className={`${theme === "Dark" ? `bg-gray-400/10 border-gray-200/30` : `border-gray-300`} fixed p-3 rounded-4xl top-6 border shadow bg-opacity-90 backdrop-blur-sm z-50 transition-transform w-fit lg:w-1/4 duration-500 ease-in-out 
      ${isVisible ? "translate-y-0" : "-translate-y-40"}`}
    >
      <div className="px-3">
        <div className="flex justify-between items-center">
          <ul className="flex items-center gap-8">
            {navlist?.map((data) => {
              return (
                <li className="" key={`${data?.navText}+${data?.id}`}>
                  <a
                    href="#home"
                    className={`${theme === "Dark" ? `text-white hover:text-violet-400` : `text-gray-500 hover:text-violet-400`} transition-colors ease-in-out duration-300`}
                  >
                    {data?.icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            ref={toggleRef}
            className="cursor-pointer"
            onClick={() => {
              const newMode = theme === "Dark" ? "Light" : "Dark";
              dispatch(setTheme(newMode));
            }}
          >
            {theme === "Dark" ? (
              <AiOutlineSun className="w-5 h-5 dark:text-white hover:text-violet-400" />
            ) : (
              <AiOutlineMoon className="w-5 h-5 text-gray-500 hover:text-violet-400" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
