import React from "react";

interface ButtonI {
  value: string;
  extraTailwind?: string;
}

function Button({ value, extraTailwind }: ButtonI) {
  return (
    <div
      className={`bg-light-blue border-solid border-2 border-light-blue max-w-[150px] min-w-[150px] cursor-pointer py-2 px-6 mx-auto rounded-full hover:bg-back-blue hover:text-light-blue hover:transition hover:duration-500 ${extraTailwind} `}
    >
      <p className="text-center">{value}</p>
    </div>
  );
}

Button.defaultProps = {
  extraTailwind: "",
};

export default Button;
