import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import OrderMedicine from "./Pages/Customer/OrderMedicinePage";
import VideoConference from "./Pages/Customer/VideoConferencePage";
import MeetDoctor from "./Pages/Customer/MeetDoctor";
import ForgotPassword01 from "./Pages/Customer/ForgotPassword01";
import ForgotPassword02 from "./Pages/Customer/ForgotPassword02";
import LaboratoryFees from "./Pages/Customer/LaboratoryFees";
import PayByCard from "./Pages/Customer/PayByCard";
import AppointmentConfirmation from "./Pages/Customer/AppointmentConfirmation";
import WaitingForAppointment from "./Pages/Customer/WaitingForAppointment";
import MyTurnAppointment from "./Pages/Customer/MyTurnAppointment";
import BeforeLoginAppointment from "./Pages/Customer/BeforeLoginAppointment";
import SuccessfulOrderRequest from "./Pages/Customer/OrderMedicineProcess/SuccessfulOrderRequest";
import OrderProcessing from "./Pages/Customer/OrderMedicineProcess/OrderProcessing";
import CompletedOrder from "./Pages/Customer/OrderMedicineProcess/CompletedOrder";
import OrderSuccessful from "./Pages/Customer/OrderMedicineProcess/OrderSuccessfull";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Customer */}
          <Route path="/" element={<LandingPage />} />
          <Route path="orderMedicine" element={<OrderMedicine />} />
          <Route path="/videoConference" element={<VideoConference />} />
          <Route path="/meetDoctor" element={<MeetDoctor />} />
          <Route path="/ForgotPassword01" element={<ForgotPassword01 />} />
          <Route path="/ForgotPassword02" element={<ForgotPassword02 />} />
          <Route path="/LaboratoryFees" element={<LaboratoryFees />} />
          <Route path="/PayByCard" element={<PayByCard />} />
          <Route
            path="/AppointmentConfirmation"
            element={<AppointmentConfirmation />}
          />
          <Route
            path="/WaitingForAppointment"
            element={<WaitingForAppointment />}
          />
          <Route path="/MyTurnAppointment" element={<MyTurnAppointment />} />
          <Route
            path="/BeforeLoginAppointment"
            element={<BeforeLoginAppointment />}
          />
          <Route
            path="/SuccessfulOrderRequest"
            element={<SuccessfulOrderRequest />}
          />
          <Route path="/OrderProcessing" element={<OrderProcessing />} />
          <Route path="/CompletedOrder" element={<CompletedOrder />} />
          <Route path="/OrderSuccessful" element={<OrderSuccessful />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
