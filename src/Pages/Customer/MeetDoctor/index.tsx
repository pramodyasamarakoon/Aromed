import React from "react";
import { Link } from "react-router-dom";
import HeaderBox from "../../../components/HeaderBox";
import Button from "../../../components/MainButton";
import Footer from "../../../Lib/Footer";
import NavBar from "../../../Lib/NavBar";

function MeetDoctor() {
  return (
    <div>
      <div className="bg-back-blue">
        <NavBar />
        <div className="max-w-[1240px] mx-auto pt-28 ">
          {/* Introduction */}

          <HeaderBox
            header="Meet a Doctor"
            backIcon=""
            extraTailwind="mt-0"
            backPath="/"
          />
          <div className="p-4">
            <p className="md:hidden">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              atque id fugiat recusandae doloribus obcaecati molestiae aut?
              Fugit iste nulla architecto doloremque eligendi suscipit fuga
              nobis dicta optio magni rem quo, qui ullam, vero incidunt repellat
              nam sapiente dolorem tenetur quod amet quis beatae?
            </p>
            <p className="hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              autem impedit perspiciatis delectus officia architecto dolores
              incidunt voluptates sequi deleniti? Corporis necessitatibus sit
              molestiae error tempora nisi animi eum. Quaerat praesentium nihil,
              fugiat delectus quidem, a deserunt, quisquam eveniet animi numquam
              cumque qui molestias excepturi natus repudiandae ducimus officia
              aut amet. Repellendus saepe, alias debitis consectetur, excepturi
              cum voluptatibus laborum commodi quibusdam quae qui doloribus
              doloremque quia, provident ipsam aliquid nulla sint mollitia sit
              delectus voluptatum laboriosam magnam maiores. Suscipit
              accusantium odio dolorem asperiores consectetur, labore, illo, sit
              in quam cupiditate perferendis mollitia sapiente explicabo. Hic,
              dolores nostrum consectetur illo culpa asperiores?
            </p>
            <div className="flex justify-center pt-4 ">
              <p className="px-4">Or you can arrange video conference</p>
              <Link to="/videoConference">
                <button
                  className="p-4 py-0 rounded-lg bg-light-blue "
                  type="button"
                >
                  Click Here
                </button>
              </Link>
            </div>
          </div>

          {/* Booking Form */}
          <HeaderBox header="Book Now" />
          <div className="bg-box-blue/20">
            <div className="p-4">
              <div className="w-full md:flex justify-between md:my-2 ">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-[49%]"
                />
                <input
                  type="number"
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
              <div className="w-full md:flex justify-between md:my-2 ">
                <select className="w-full md:w-[49%]">
                  <option value="gender">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Age"
                  className="w-full md:w-[49%] "
                />
              </div>
              <div className="w-full md:flex justify-between md:my-2 ">
                <input
                  type="text"
                  placeholder="NIC Number"
                  className="w-full md:w-[49%] "
                />
                <select className="w-full md:w-[49%] ">
                  <option value="doctor">Select Doctor</option>
                  <option value="doc01">Doc01</option>
                  <option value="doc02">Doc02</option>
                </select>
              </div>
              <div className="w-full md:my-2">
                <input
                  type="date"
                  placeholder="Select a Date"
                  className="md:w-[49%] "
                />
              </div>
              <div className="w-full md:my-2 pb-4">
                <input
                  type="text"
                  placeholder="If Any Message?"
                  className="w-full "
                />
              </div>
              <Button value="Submit" />
            </div>
          </div>

          {/* Bill */}
          <div className="w-full h-auto py-20 my-12 bg-box-blue/20 ">
            {/* Bill inner box */}
            <div className="w-[340px] mx-auto pt-24 pb-16 px-8 bg-white font-bold rounded-xl ">
              {/* Bill items */}
              <div className="pb-16 border-b border-slate-500  ">
                <div className="flex justify-between ">
                  <p className="text-black">Appointment Fee</p>
                  <p className="text-black">600.00</p>
                </div>
                <div className="flex justify-between ">
                  <p className="text-black">Doctor Fee</p>
                  <p className="text-black">1700.00</p>
                </div>
              </div>
              {/* Bill total */}
              <div className="flex justify-between pt-4 pb-12 font-semi-bold text-xl ">
                <p className="text-black">Total</p>
                <p className="text-lime-500">2300.00</p>
              </div>
              <Button value="Pay on Door" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MeetDoctor;
