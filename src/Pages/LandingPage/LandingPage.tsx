import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Lib/NavBar";
import Hero from "../../Lib/Hero";
import HeaderBox from "../../components/HeaderBox";
import Button from "../../components/MainButton";
import ServiceBox from "../../components/ServiceBox";
import ServiceBoxSmall from "../../components/ServiceBoxSmall";
import DoctorCard from "../../components/DoctorCard";
import Doc1 from "../../assets/Doc1.jpg";
import Doc2 from "../../assets/Doc2.jpg";
import Doc3 from "../../assets/Doc3.jpg";
import Doc4 from "../../assets/Doc4.jpg";
import Doc5 from "../../assets/Doc5.jpg";
import img3 from "../../assets/img3.jpg";
import DoctorMeet from "../../assets/DoctorMeet.jpg";
import VideoCall from "../../assets/VideoCall.jpg";
import Footer from "../../Lib/Footer";
import CheckFormBox from "../../Lib/CheckFormBox";

/* Interface for Doctor popup */
interface IDoctorCard {
  id: number;
  image: string;
  name: string;
  special: string;
}

/* Data for the doctor */
const DOCTOR_CARDS_DETAILS: IDoctorCard[] = [
  {
    id: 1,
    image: Doc1,
    name: "Mr.Mitchel Barly",
    special: "IT",
  },
  {
    id: 2,
    image: Doc2,
    name: "Mr.Mitchel Barly",
    special: "IT",
  },
  {
    id: 3,
    image: Doc3,
    name: "Mr.Mitchel Barly",
    special: "IT",
  },
  {
    id: 4,
    image: Doc4,
    name: "Mr.Mitchel Barly",
    special: "IT",
  },
  {
    id: 5,
    image: Doc5,
    name: "Mr.Mitchel Barly",
    special: "IT",
  },
  {
    id: 6,
    image: Doc1,
    name: "Mr.Mitchel Barly",
    special: "IT",
  },
  {
    id: 7,
    image: Doc2,
    name: "Mr.Mitchel Barly",
    special: "IT",
  },
];

function LandingPage() {
  return (
    <div className="bg-back-blue ">
      <NavBar
        currentNavBar={false}
        NavBarData={[{ NavBarItems: "Home", NavBarLinks: "/" }]}
      />

      <Hero />

      {/* Check Your Appointment */}
      <div className="max-w-[1240px] mx-auto ">
        <HeaderBox header="Check Your Appointment" />
        <CheckFormBox
          pTag="Do you want to check about your previous order? You can enter your
          Appointment ID and get updated about your order."
          placehoder="Appointment ID"
          buttonName="Check"
          extratailwind=""
          linkTo="/WaitingForAppointment"
        />

        {/* About Us */}
        <div id="1" className="">
          <HeaderBox header="About Us" />
          <div className=" h-full grid grid-cols-3 gap-4">
            <div className="col-span-2 flex flex-col items-center justify-center">
              <p className="px-8 hidden lg:block  ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
                aliquid assumenda. Labore minus nostrum, sunt aspernatur aliquid
                quam inventore eius nesciunt reiciendis! Ab, dicta a! Error
                totam quasi reprehenderit ut blanditiis minus. Eaque soluta est
                reiciendis. Consequuntur beatae sed a explicabo? Molestias dicta
                adipisci nihil, odio rerum esse facilis nam perferendis
                consequatur sed laboriosam earum accusantium consequuntur cum
                sapiente quibusdam asperiores magnam modi alias doloribus!
                Maiores, architecto laborum. Fugiat alias excepturi eos
                perferendis quae quo nulla vitae sit eius non in tempora
                blanditiis mollitia rem ullam sed, quisquam numquam quaerat
                minus molestiae! Dicta facere minima tempora aliquam praesentium
                explicabo harum temporibus quam necessitatibus molestiae? Nemo,
                soluta iste! Expedita consectetur aliquam itaque laboriosam
                debitis, error voluptas totam soluta?
              </p>
              <p className="lg:hidden px-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                rerum fuga, natus quod, iste maxime cum eius perspiciatis
                aperiam facere commodi quaerat asperiores vero doloremque nulla
                recusandae! Doloribus neque voluptates error itaque harum?
              </p>

              <Link to="videoConference" className="">
                <p className="text-center py-2 md:py-8 lg:hidden cursor-pointer hover:text-light-blue ">
                  {" "}
                  Read More....{" "}
                </p>
              </Link>
            </div>
            <div>
              <img
                className="object-cover w-full max-h-[300px] "
                src={img3}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Services */}
        <div id="2">
          <HeaderBox header="Our Services" />
          {/* After lg */}
          <div className="lg:flex justify-evenly hidden   ">
            <ServiceBox
              icon="fontisto:doctor"
              topic="Meet a Doctor"
              path="videoConference"
              text="You can book an appointment Here. There are two options you have. You can meet a doctor physically or vertually."
            />
            <ServiceBox
              icon="ri:medicine-bottle-fill"
              topic="Order Medicine"
              path="orderMedicine"
              text="You can order your medicine to your doorstep. Cash on delivery is now available. "
            />

            <ServiceBox
              icon="medical-icon:i-laboratory"
              topic="Laboratory Charges"
              path="LaboratoryFees"
              text="You can view our charges for the laboratory tests."
            />
          </div>

          {/* Before lg */}
          <div className="flex flex-col lg:hidden ">
            <ServiceBoxSmall
              icon="fontisto:doctor"
              topic="Meet a Doctor"
              path="videoConference"
            />
            <ServiceBoxSmall
              icon="ri:medicine-bottle-fill"
              topic="Order Medicine"
              path="orderMedicine"
            />
            <ServiceBoxSmall
              icon="medical-icon:i-laboratory"
              topic="Laboratory Charges"
              path="videoConference"
            />
          </div>
        </div>

        {/* Our Doctors */}
        <div>
          <HeaderBox header="Our Doctors" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {DOCTOR_CARDS_DETAILS.map(({ id, image, name, special }) => (
              <DoctorCard
                key={id}
                image={image}
                name={name}
                special={special}
              />
            ))}
          </div>
        </div>

        {/* Select appointment method */}
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 my-8">
          <div>
            <Link to="/meetDoctor">
              <div className="sm:col-start-2 mx-8 sm:mx-0 col-span-2 h-[126px] relative group cursor-pointer ">
                <img
                  className="w-full h-full object-cover "
                  src={DoctorMeet}
                  alt=""
                />
                <div className="bg-box-blue/60 h-full w-full absolute top-0 " />
                <div className="bg-light-blue h-[50%] w-full absolute bottom-0 flex flex-col justify-center group-hover:h-full  group-hover:bg-light-blue/60 transition-[1000ms] ">
                  <h1 className=" text-xl text-center group-hover:font-bold ">
                    Meet a Doctor
                  </h1>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/videoConference">
              <div className="sm:col-start-4 mx-8 sm:mx-0 col-span-2 h-[126px] relative group cursor-pointer ">
                <img
                  className="w-full h-full object-cover "
                  src={VideoCall}
                  alt=""
                />
                <div className="bg-box-blue/60 h-full w-full absolute top-0 ">
                  <div className="bg-light-blue h-[50%] w-full absolute bottom-0 flex flex-col justify-center group-hover:h-full  group-hover:bg-light-blue/60 transition-[1000ms] ">
                    <h1 className=" text-xl text-center group-hover:font-bold ">
                      Video Conference
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Staff Area */}
        <div id="3">
          <HeaderBox header="Staff Area" />
          <div className="bg-box-blue/20 w-full py-8 px-4 flex flex-col justify-center text-center ">
            <form>
              <input
                className="w-full my-2 sm:my-0 sm:w-[48%] mx-[5px]"
                type="text"
                placeholder="User Name"
              />
              <input
                className="w-full my-2 sm:my-0 sm:w-[48%] mx-[5px]"
                type="password"
                placeholder="Password"
              />
              <p className="p-2 pb-8">Forgot Password?</p>
              <Button value="Log In" />
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
