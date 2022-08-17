import React, { useState } from "react";
import { Card, CardHeader } from "@material-tailwind/react";
import DoctorPopUp from "../../Lib/DoctorPopUp";

interface DoctorCardC {
  image: string;
  name: string;
  special: string;
}

function DoctorCard({ image, name, special }: DoctorCardC) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={togglePopup}
        className="flex justify-center"
      >
        <Card className=" my-6 w-[237px] h-[281px] group cursor-pointer">
          <img
            className="h-full w-full object-cover rounded-xl absolute top-0 left-0"
            src={image}
            alt=""
          />
          <CardHeader
            color="blue"
            className="relative flex flex-col justify-center text-center w-full bg-back-blue/80 top-[211px] ml-0 h-[70px] group-hover:top-[0] group-hover:h-full transition-[1000ms] "
          >
            <p className="text-xl p-2 pb-0 font-bold ">{name}</p>
            <p className="px-2 text-[14px] ">Specialist in {special}</p>
          </CardHeader>
        </Card>
      </button>
      <DoctorPopUp
        image={image}
        name={name}
        state={isOpen}
        closeHandler={() => setIsOpen(false)}
      />
    </>
  );
}

export default DoctorCard;
