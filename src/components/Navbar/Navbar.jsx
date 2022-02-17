import { BsSunFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import useDarkMode from "../../useDarkMode";
import { FaMoon } from "react-icons/fa";
const Navbar = (props) => {
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <nav className="flex items-center ">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-4">NerdCard</div>
        {isDarkMode ? (
          <BsSunFill
            size={"24px"}
            color={"#e9c46a"}
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={"24px"}
            color={"#e9c46a"}
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        )}
      </div>
      <ul className="ml-auto text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className={"cursor-pointer"}
            onClick={handleOpenMenu}
          />
        ) : !openMenu && isMobile ? (
          <FaBars
            size={"24px"}
            className={"cursor-pointer "}
            onClick={handleOpenMenu}
          />
        ) : (
          <div className="flex gap-7">
            <li className="hover-menu">
              <a href="/">Features</a>
            </li>
            <li className="hover-menu">
              <a href="/">Menu</a>
            </li>
            <li className="hover-menu">
              <a href="/"> Our Story</a>
            </li>
            <li className="hover-menu mr-5">
              <a href="/">Contact</a>
            </li>
          </div>
        )}
        {openMenu && (
          <div className="absolute z-10 block w-[90%]  right-8 text-[#333] bg-white p-9  text-center text-16 rounded-[4px] transition transform active:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ">
            <li>Features</li>
            <li>Menu</li>
            <li>Our Story</li>
            <li>Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
