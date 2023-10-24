import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AuthRoute from './Routes/protectedRoute';
//----------React Bootstarp Dependencies----------------
import 'react-bootstrap';
import 'bootstrap';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/pod/media/Media.css';

//-----------Application Components----------------------
import Banner from './components/banner/Banner';
import NavHead from './components/navbar/Navbar';
import Login from './components/login/Login';
import Sign from './components/sign/Sign';
import Forgot from './components/forgot/Forget';
import NewPassword from './components/forgot/NewPassword';
import Live from './components/live/Live';
import Cat from './components/cat/Cat';
import Pod from './components/pod/Pod';
import AlertEmail from './components/messages/Alert-email';
import './App.css';
import ChangePassword from './components/forgot/ChangePassword';
import Support from './components/pages/Support';
import AboutUs from './components/pages/AboutUs';
import Faq  from './components/pages/Faq';
import Price from './components/pages/Price';
import LoginButton from './components/buttons/loginButton';
import SignupButton from './components/buttons/signupButton';
import SignoutButton from './components/buttons/signoutButton';

export default function App() {
  //AOS animation -----
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <NavHead />
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path="/cat" element={<Cat />} />
            <Route path="/live" element={<Live />} />
            <Route path="/pod" element={<Pod />} />
          </Route>

          <Route path="*" element={<p>404 page not found!</p>} />
          <Route path="/" element={<Banner />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Alert" element={<AlertEmail />} />
          <Route path="/reset-password" element={<NewPassword />} />
          <Route path="/update-password" element={<ChangePassword />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/price" element={<Price />} />
          <Route path="/sign-up" element={<SignupButton />} />
          <Route path="/sign-out" element={<SignoutButton />} />
          <Route path="/login-button" element={<LoginButton />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </Router>
    </div>
  );
}
