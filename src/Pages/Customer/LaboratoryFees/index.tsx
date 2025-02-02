import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";
import NavBar from "../../../Lib/NavBar";

interface ILabFees {
  Service: string;
  Fee: number;
}

const LAB_FEE_DETAILS: ILabFees[] = [
  {
    Service: "Appointment",
    Fee: 1500.0,
  },
  {
    Service: "Appointment02",
    Fee: 1800.0,
  },
];

function LaboratoryFees() {
  return (
    <div className="bg-back-blue">
      <NavBar />
      <div className="max-w-[1240px] mx-auto pt-24 ">
        <HeaderBox header="Laboratory Charges" backIcon="true" />
        {/* LIST */}
        <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
          {/* Bill inner box */}
          <div className="w-[380px] sm:w-[600px] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
            {/* Bill items */}
            <div className="pb-16   ">
              <table className="table-fixed w-full border-collapse border border-slate-500 ">
                <thead>
                  <th className=" border border-slate-600">Service</th>
                  <th className=" border border-slate-600">Charge</th>
                </thead>
                <tbody>
                  {LAB_FEE_DETAILS.map(({ Service, Fee }) => (
                    <tr>
                      <td className="text-left border border-slate-700">
                        {Service}
                      </td>
                      <td className="text-right border border-slate-700">
                        {Fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link to="/">
              <Button value="Back" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaboratoryFees;
