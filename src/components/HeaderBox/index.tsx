import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import img2 from "../../assets/image2.jpg";

interface HeaderBoxI {
  header: string;
  extraTailwind?: string;
  backIcon?: string;
  backPath?: string;
}

function HeaderBox({ header, extraTailwind, backIcon, backPath }: HeaderBoxI) {
  return (
    <div
      className={` max-w-[1240px] w-full h-full relative my-12 mb-4 mx-auto text-white ${extraTailwind}  `}
    >
      <img className="h-[100px] w-full object-cover " src={img2} alt="" />
      <div className="bg-back-blue/90 absolute w-full h-full top-0 left-0" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center">
        <div className="flex flex-row mx-auto">
          <Link to={`${backPath}`}>
            <div className={` cursor-pointer ${backIcon} `}>
              <Icon
                icon="ion:chevron-back-circle"
                color="white"
                width="36"
                height="36"
              />
            </div>
          </Link>

          <h1 className=" text-3xl font-bold underline underline-offset-1 px-20 ">
            {header}
          </h1>
        </div>
      </div>
    </div>
  );
}

HeaderBox.defaultProps = {
  extraTailwind: "",
  backIcon: "hidden",
  backPath: "",
};

export default HeaderBox;
