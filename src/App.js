import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ProtectedRoute from './Routes/protectedRoute';
//----------React Bootstarp Dependencies----------------
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//-----------Application Components----------------------
import Banner from './components/banner/Banner';
import NavHead from './components/navbar/Navbar';
import Login from './components/login/Login';
import Sign from './components/sign/Sign';
import Forgot from './components/forgot/Forget';
import OTP from './components/forgot/OTP';
import NewPassword from './components/forgot/NewPassword';
import Live from './components/live/Live';
import Cat from './components/cat/Cat';
import Pod from './components/pod/Pod';
import AlertEmail from './components/messages/Alert-email';
import './App.css';
import ResendOTP from './components/forgot/ResendOTP';
import ChangePassword from './components/forgot/ChangePassword';
import About from './components/pages/about';
import Support from './components/pages/support';
import FAQ from './components/pages/fqa';
import Price from './components/pages/price';
import LoginButton from './components/buttons/loginButton';
import SignupButton from './components/buttons/signupButton';
import SignoutButton from './components/buttons/signoutButton';

export default function App() {
  //AOS animation -----
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);





  return (
    <div className="App">
      <Router>
        <NavHead />
        <Routes>
          <Route path="/" element={<Banner />} />
          {/* <Route path="/live" element={<Live />} /> */}
          <Route
            path="/live"
            element={
              <ProtectedRoute>
                <Live />
              </ProtectedRoute>
            }
          />
          <Route path="/pod" element={<Pod />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/verification" element={<OTP />} />
          <Route path="/Alert" element={<AlertEmail />} />
          <Route path="/reset-password" element={<NewPassword />} />
          <Route path="/resend-verification" element={<ResendOTP />} />
          <Route path="/update-password" element={<ChangePassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/fqa" element={<FAQ />} />
          <Route path="/price" element={<Price />} />
          <Route path="/sign-up" element={<SignupButton />} />
          <Route path="/sign-out" element={<SignoutButton />} />
          <Route path="/login-button" element={<LoginButton />} />
          <Route path="*" element={<p>404 page not found!</p>} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
