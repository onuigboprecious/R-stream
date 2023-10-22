import React from 'react';
import { Container, NavLink, Navbar, Nav} from 'react-bootstrap';
import { FcApproval } from 'react-icons/fc';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import LoginButton from '../buttons/loginButton';
import SignupButton from '../buttons/signupButton';
// import {  supabase } from '../../Auth/SupabaseAuth';
import '../live/Live';
import '../cat/Cat';
import '../pod/Pod';
import './Navbar.css';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { } from '../../Auth/SupabaseAuth';
import { useAuth, } from '../../Context/Authprovider'
import SignoutButton from '../buttons/signoutButton';

const NavHead = () => {



  const { auth, user  } = useAuth();

  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { error } = await signOut();
  //     console.log(error);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="nav_section ">
      <Navbar bg="transperant" variant="light" expand="md">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="brand logo" height={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-5 my-lg-0 justify-content-center"
              style={{ maxHeight: 'auto' }}
              navbarScroll
            >
              <NavLink as={Link} to="/" className="link">
                Home
              </NavLink>

              <NavLink as={Link} to="/live" className="link">
                Live Stream
              </NavLink>
              <NavLink as={Link} to="./pod" className="link">
                Podcast
              </NavLink>
              <NavLink as={Link} to="/cat" className="link">
                Categories
              </NavLink>
            </Nav>
            <Nav className="d-flex action">
              {!auth && <LoginButton />}
              {!auth && <SignupButton />}
            </Nav>
            <Nav>
              {auth && (
                <div className="signout_panel">
                  <div className="text">
                    Hello!, {user.email} <FcApproval />
                  </div>
                  <SignoutButton />
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHead;
