import { LiaHomeSolid } from "react-icons/lia";
import { BiBriefcaseAlt } from "react-icons/bi";
import { LuFolderCode } from "react-icons/lu";
import { BiEnvelope } from "react-icons/bi";

export const navlist = [
  {
    id: 1,
    navText: "Home",
    icon: <LiaHomeSolid className="w-6 h-6" />,
    link: "#home",
  },
  {
    id: 2,
    navText: "Experience",
    icon: <BiBriefcaseAlt className="w-6 h-6" />,
    link: "#experience",
  },
  {
    id: 3,
    navText: "Projects",
    icon: <LuFolderCode className="w-6 h-6" />,
    link: "#projects",
  },
  {
    id: 4,
    navText: "Contact",
    icon: <BiEnvelope className="w-6 h-6" />,
    link: "#contact",
  },
];
