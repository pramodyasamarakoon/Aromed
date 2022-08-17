import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/MainButton";

interface CheckFormBoxI {
  extratailwind?: string;
  pTag?: string;
  placehoder: string;
  buttonName: string;
  linkTo: string;
}

function CheckFormBox({
  extratailwind,
  pTag,
  placehoder,
  buttonName,
  linkTo,
}: CheckFormBoxI) {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto ">
        <p className={` p-4 pt-0 ${extratailwind} `}>{pTag}</p>
        <div className="bg-box-blue/30">
          <form className="md:flex w-[80%] m-auto py-8 ">
            <input
              className="w-full mb-4 md:mb-0 mr-4  "
              type="text"
              placeholder={placehoder}
            />
            <Link to={`${linkTo}`}>
              <Button value={buttonName} extraTailwind="p-4" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

CheckFormBox.defaultProps = {
  extratailwind: "hidden",
  pTag: "",
};

export default CheckFormBox;
