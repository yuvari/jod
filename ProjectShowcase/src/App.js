import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./components/ShowCase_LandingPage/App"
import Login from "./components/Login/index";
import JoinUsB from "./components/Join us pages/index";
import RegisterBusiness from "./components/Register_Business/registerbusiness";
import RegisterPersonal from "./components/Register_Personal/registerpersonal";
import DashBoardBusiness from "./components/ShowcaseBusiness/App";
import DashBoardUser from "./components/ShowcaseUser/App";



import Reset from "./components/Reset-password/index"
import Reset_password_by_email_address from "./components/Reset_password_by email_address/index";
import Subscription from "./components/Subscription page/index"
import CYP2 from "./components/Complete your profile ph.no page/index"



import Profile1 from "./components/ChangeNumber/profile1" 
import Profile2 from "./components/ChangeNumber/profile2" 
import Profile3 from "./components/ChangeNumber/profile3" 
import GSP from "./components/ChangeNumber/gsp"
import CompleteProfileOTP from "./components/Complete your profie/business";
import Setup_completed from "./components/Setup-completed";

import EditPage from "./components/edit page/index"


// import Complete_profile_phone_no from "./components/Complete_profile_phone_no/index"
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Landing />}/>
        <Route path="login" element={<Login />} />
        <Route path="joinus" element={<JoinUsB />} />
        <Route path="dashboard" element={<DashBoardBusiness />} />
        <Route path="dashboarduser" element={<DashBoardUser/>} />
        
        <Route path="personal">
        <Route path="register" element={<RegisterPersonal />} />
        </Route>


        <Route path="business">
        <Route path="register" element={<RegisterBusiness />} />
        <Route path="cyp2" element={<CYP2 />} />

        <Route path="otp" element={<CompleteProfileOTP />} />
        <Route path="sc" element={<Setup_completed />} />
          
        <Route path="profile">
        <Route path="p1" element={<Profile1 />} />
        <Route path="p2" element={<Profile2 />} />
        <Route path="p3" element={<Profile3 />} />
        <Route path="gsp" element={<GSP />} />
          </Route>
        </Route>

        <Route path="subs" element={<Subscription />} />
        <Route path="reset" element={<Reset />} />
        <Route path="r" element={<Reset_password_by_email_address />} />






        <Route path="edit" element={<EditPage />} />
        
      </Routes>
  </BrowserRouter>
  );
}

export default App;
