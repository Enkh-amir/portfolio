import { Button } from "./Button";
import { MenuCloseIcon, MenuIcon } from "./svg/MenuIcon";
import { DarkButton, ModeButton } from "./svg/ModeButton";
import { useState } from "react";
import Link from "next/link";
import { HeaderButton } from "./ScrollingGyatt";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const [menuOpen, setNavMode] = useState(false);

  const handleNav = () => {
    console.log("aa");
    setNavMode(!menuOpen);
  };
  return (
    <div className="flex w-[100%] bg-[#FFFFFF] dark:bg-[#030712] fixed z-40 justify-center">
      <div className="flex lg:w-[1440px] w-[768px] items-center justify-between p-4 lg:px-[112px] lg:py-[16px] ">
        <a className="text-[30px] font-rubik dark:text-[#F9FAFB] " href="">
          AMAR
        </a>
        <div className="lg:flex hidden items-center justify-center gap-6 ">
          <HeaderButton textType={"#about"} text={"About"} />
          <HeaderButton textType={"#work"} text={"Work"} />
          <HeaderButton textType={"#experience"} text={"Testimonials"} />
          <HeaderButton textType={"#contact"} text={"Contact"} />
          <div className="w-[1px] h-[24px] bg-[#F3F4F6] "></div>
          <div className="flex items-center justify-center gap-[16px] ">
            <button onClick={toggleDarkMode} id="darkModeButton">
              {darkMode ? <ModeButton /> : <DarkButton />}
            </button>
            <button className="flex btn py-[6px] px-[16px] justify-center items-center rounded-[12px] bg-[#111827] dark:bg-[#F9FAFB] text-[#F9FAFB] dark:text-[#111827] ">
              Download CV
            </button>
          </div>
        </div>
        <div onClick={handleNav} className="lg:hidden flex">
          <MenuIcon />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[25%] lg:hidden h-screen blur-lg ease-in duration-300 z-50"
            : "fixed top-0 h-screen z-50 blur-lg left-[-100%] ease-in-out duration-500 "
        }
      ></div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[85%] lg:hidden h-screen bg-[#ffffff] dark:bg-[#030712] ease-in duration-300 z-50"
            : "fixed top-0 h-screen z-50 right-[-100%] ease-in-out duration-500 "
        }
      >
        <div className="flex p-4 w-[full] items-center justify-between ">
          <a className="text-[30px] font-rubik dark:text-[#F9FAFB] " href="">
            AMAR
          </a>
          <div onClick={handleNav} className="cursor-pointer ">
            <MenuCloseIcon />
          </div>
        </div>
        <ul className="flex flex-col p-4 gap-4 border-y-black ">
          <HeaderButton
            textType={"#about"}
            text={"About"}
            click={() => setNavMode(false)}
          />
          <HeaderButton
            textType={"#skills"}
            text={"Skills"}
            click={() => setNavMode(false)}
          />
          <HeaderButton
            textType={"#work"}
            text={"Work"}
            click={() => setNavMode(false)}
          />
          <HeaderButton
            textType={"#contact"}
            text={"contact"}
            click={() => setNavMode(false)}
          />
        </ul>
        <div className="flex gap-4 flex-col p-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-normal text-[#4B5563] dark:text-[#D1D5DB]">
              Switch Theme
            </div>
            <button onClick={toggleDarkMode} id="darkModeButton">
              {darkMode ? <ModeButton /> : <DarkButton />}
            </button>
          </div>
          <div className="bg-[#111827] py-[6px] px-4 flex justify-center items-center rounded-xl text-[#F9FAFB] text-lg font-medium dark:text-[#111827] dark:bg-[#F9FAFB] btn ">
            Download CV
          </div>
        </div>
      </div>
    </div>
  );
};
