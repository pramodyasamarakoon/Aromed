import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import CheckFormBox from "../../../Lib/CheckFormBox";
import Button from "../../../components/MainButton";
import NavBar from "../../../Lib/NavBar";
import Footer from "../../../Lib/Footer";

function OrderMedicine() {
  return (
    <div className="bg-back-blue ">
      <NavBar />

      {/* Order Medicine Page */}

      <div className="max-w-[1240px] mx-auto pt-28 ">
        {/* Check Form */}

        <HeaderBox
          header="Check Your Order"
          backIcon=""
          extraTailwind="mt-0 "
          backPath="/"
        />
        <CheckFormBox
          pTag="Do you want to check about your previous order? You can enter your Order ID and get updated about your order."
          placehoder="Order ID"
          buttonName="Check"
          extratailwind=""
          linkTo="/CompletedOrder"
        />
        {/* Order Form */}

        <HeaderBox header="Order Medicine" />
        <div>
          <div className="p-4 px-12">
            <p>Delivery Chargers Will be apply*</p>
            <p className="px-12">In Dristict - LKR 200</p>
            <p className="px-12">Out of District - LKR 400</p>
          </div>
          <div className="bg-box-blue/20">
            <div className="p-4">
              <div className="w-full md:flex justify-between md:my-2 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-[49%]"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Mobile Number"
                  className="w-full md:w-[49%] "
                />
              </div>
              <div className="w-full md:flex justify-between md:my-2">
                <input
                  type="email"
                  placeholder="E mail"
                  className="md:w-[49%] "
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Address"
                  className="md:w-[49%] "
                />
              </div>
              <div className="w-full md:my-2">
                <input
                  type="text"
                  placeholder="NIC Number"
                  className="md:w-[49%] "
                />
              </div>
              <div className="md:my-2">
                <p className="px-8">Prescription</p>
                <input
                  type="file"
                  name=""
                  id=""
                  placeholder="Prescription"
                  className="md:w-[49%] "
                />
              </div>
              <div className="md:my-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Any Special Notes?"
                />
              </div>
              <div className="py-2">
                <Link to="/SuccessfulOrderRequest">
                  <Button value="Request" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderMedicine;
