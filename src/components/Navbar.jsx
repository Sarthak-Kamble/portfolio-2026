import React, { useState, useEffect } from "react";

const Navbar = () => {
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
      className={`fixed w-fit p-4 rounded-lg top-6 border border-neutral-400/80 bg-white/30 bg-opacity-90 backdrop-blur-sm z-50 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-40"}`}
    >
      <div className="px-5">
        <div className="flex justify-between items-center gap-12">
          <div className="text-white font-bold text-xl">Sarthak</div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            {/* Mobile menu button - can be expanded later */}
            <button className="text-white">Menu</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
