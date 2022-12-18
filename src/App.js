import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//----------React Bootstarp Dependencies----------------
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//-----------Application Components----------------------
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import NavHead from './components/navbar/Navbar';
import Login from './components/login/Login';
import Sign from './components/sign/Sign';
import Forgot from './components/forgot/Forget';
import OTP from './components/forgot/OTP';
import Live from './components/live/Live';
import Cat from './components/cat/Cat';
import Pod from './components/pod/Pod';
import './App.css';

export default function App() {
  //AOS animation -----
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  // ------------------

  return (
    <div className="App">
      <Router>
        <NavHead />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/live" element={<Live />} />
          <Route path="/pod" element={<Pod />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Sign />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/OTP" element={<OTP />} />
          <Route path="*" element={<p>404 page not found!</p>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
