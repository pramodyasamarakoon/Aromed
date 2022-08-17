import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Button from "../../components/MainButton";
import Logo from "../../components/Logo";

interface NavBarI {
  currentNavBar?: boolean;
  currentButton?: boolean;
  buttonName?: string;
  buttonLink?: string;
  NavBarData?: {
    NavBarItems: string;
    NavBarLinks: string;
  }[];
}

/* interface SpecialNavBar {
  name: string;
  link: string;
}

 const SPECIAL_NAVBAR_ITEMS: SpecialNavBar[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#1",
  },
]; */

function NavBar({
  currentNavBar,
  currentButton,
  buttonName,
  buttonLink,
  NavBarData,
}: NavBarI) {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full  bg-back-blue  text-white fixed z-10 ">
      {/* Current NavBar */}
      <div className="max-w-[1500px] h-[100px] mx-auto px-4 hidden lg:flex items-center justify-between ">
        <div>
          <Logo />
        </div>

        <div className={currentNavBar ? "block" : "hidden"}>
          <ul className="flex">
            <a href="/">
              <li>HOME</li>
            </a>
            <a href="#1">
              <li>ABOUT</li>
            </a>
            <a href="#2">
              <li>SERVICE</li>
            </a>
            <a href="#3">
              <li>STAFF AREA</li>
            </a>
          </ul>
        </div>

        {/* Special NavBar */}
        <div className={!currentNavBar ? "block" : "hidden"}>
          <ul className="flex">
            {NavBarData?.map(({ NavBarItems, NavBarLinks }) => (
              <a href={`${NavBarLinks}`}>
                <li className="uppercase">{NavBarItems}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className={currentButton ? "block" : "hidden"}>
          <Link to={`${buttonLink}`}>
            <Button value={`${buttonName}`} />
          </Link>
        </div>
      </div>

      {/* Hamburger NaBar */}
      <div className="max-w-[1500px]  h-[100px] mx-auto px-4 lg:hidden flex items-center justify-between ">
        <div>
          <Logo />
        </div>
        <button
          type="button"
          className="cursor-pointer text-4xl "
          onClick={handleNav}
        >
          {!nav ? <Icon icon="bx:menu" /> : <Icon icon="ci:close-small" />}
        </button>
      </div>

      <div
        className={
          nav
            ? "text-white w-full h-[430px] absolute top-[100px] left-0 bg-back-blue justify-center text-center transition-[1s] lg:hidden"
            : "absolute left-[-100%] "
        }
      >
        <div>
          <ul>
            <Link to="/">
              <li className="py-8 border-b ">HOME</li>
            </Link>

            <li className="py-8 border-b ">ABOUT</li>
            <li className="py-8 border-b ">SERVICE</li>
            <li className="py-8 border-b ">STAFF AREA</li>
          </ul>
        </div>
        <div className="py-4">
          <Button value="Booking Now" />
        </div>
      </div>
    </div>
  );
}

NavBar.defaultProps = {
  currentNavBar: "true",
  currentButton: "true",
  buttonName: "Booking Now",
  buttonLink: "/videoConference",
  NavBarData: {
    NavBarData: "",
    NavBarLinks: "",
  },
};

export default NavBar;
