import React from 'react';
import { Container, NavLink, Navbar, Nav, Button, } from 'react-bootstrap';
import { FcApproval } from 'react-icons/fc';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import LoginButton from '../buttons/loginButton';
import SignupButton from '../buttons/signupButton';
import { supabase } from '../../Auth/SupabaseAuth';
import '../live/Live';
import '../cat/Cat';
import '../pod/Pod';
import './Navbar.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavHead = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log('User signed in:', user); // Debug
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      }
    };
    fetchUserData();
  }, []);

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setUser(null); // Clear the user state
    localStorage.clear(); // To clear Local Storage
    sessionStorage.clear(); // To clear Session Storage
    navigate('/');
  };

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
              {user ? (
                <div className="signout_panel">
                  <text>
                    Hello!, {user.email} <FcApproval />
                  </text>
                  <Button
                    onClick={handleSignout}
                    variant="outline-light"
                    className="btn_sign_up m-2"
                    as={Link}
                    to="/"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  {' '}
                  <LoginButton /> <SignupButton />
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavHead;
