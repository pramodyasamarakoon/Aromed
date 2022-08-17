import React from "react";
import { Icon } from "@iconify/react";

interface DoctorPopUpI {
  image: string;
  name: string;
  state: boolean;
  closeHandler: () => void;
}

function DoctorPopUp({ image, name, state, closeHandler }: DoctorPopUpI) {
  return (
    <div
      className={`fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[460px] sm:w-3/5 h-[70%] sm:h-3/4 m-auto ${
        state ? "flex" : "hidden"
      } flex-col justify-center  bg-back-blue/95 rounded-xl`}
    >
      <div className="w-[460px] sm:w-[1000px] h-[480px] sm:h-[500px] m-auto ">
        <div className="p-2 sm:p-4 flex flex-col ">
          <Icon
            onClick={() => closeHandler()}
            // Closing functionality
            className="text-4xl cursor-pointer "
            icon="carbon:close-outline"
          />
        </div>
        <div className=" h-full grid sm:grid-cols-6 sm:grid-rows-4 px-4 sm:px-12 pb-16 ">
          <img
            src={image}
            alt=""
            className="sm:col-span-2 sm:row-span-4 w-[200px] h-[200px] sm:w-full sm:h-full object-cover"
          />
          <div className="hidden col-span-4 sm:flex flex-col justify-center text-center sm:text-4xl text-2xl font-bold ">
            <h1>{name}</h1>
          </div>
          <div className=" col-span-3 sm:hidden flex flex-col justify-center text-center text-2xl font-bold ">
            <h1>{name}</h1>
          </div>
          <div className="col-span-4 row-span-3">
            <div className="flex justify-between py-2">
              <p className="sm:px-8 flex flex-col justify-center text-xl">
                Specialization
              </p>
              <input className="w-[60%]" type="text" />
            </div>
            <div className="flex justify-between py-2">
              <p className="sm:px-8 flex flex-col justify-center text-xl">
                E mail
              </p>
              <input className="w-[60%]" type="text" />
            </div>
            <div className="flex justify-between py-2">
              <p className="sm:px-8 flex flex-col justify-center text-xl">
                MBBS Number
              </p>
              <input className="w-[60%]" type="text" />
            </div>
            <div className="flex justify-between py-2">
              <p className="sm:px-8 flex flex-col justify-center text-xl">
                Description
              </p>
              <input className="w-[60%]" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorPopUp;
