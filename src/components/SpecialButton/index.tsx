import React from "react";

interface ButtonS {
  value: string;
}

function ButtonSpecial({ value }: ButtonS) {
  return (
    <div className="bg-transparent my-4 border-solid border-2 max-w-[150px] cursor-pointer py-2 px-6 mx-auto hover:bg-box-blue  hover:transition hover:duration-300 ">
      <p className="text-xl">{value}</p>
    </div>
  );
}

export default ButtonSpecial;
