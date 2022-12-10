import {Container, NavLink, Navbar, Nav, Button,  } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import '../login/Login';
import '../sign/Sign';
import '../live/Live';
import '../cat/Cat';
import  '../pod/Pod' 
import './Navbar.css';

function NavHead() {
  return (
    <div className="nav_section">
      <Navbar bg="transparent" expand="md">
        <Container>
          <Navbar.Brand>
            <img src={logo} alt="brand logo" height={40} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-5 my-lg-0"
              style={{ maxHeight: 'auto' }}
              navbarScroll
            >
              <NavLink as={Link} to="/">
                Home
              </NavLink>

              <NavLink as={Link} to="/live">
                Live Stream
              </NavLink>
              <NavLink as={Link} to="./pod">
                Podcast
              </NavLink>
              <NavLink as={Link} to="/cat">
                Categories
              </NavLink>
            </Nav>
            <Nav className="d-flex action">
              <Button
                variant="Light"
                className="btn_login m-2"
                as={Link}
                to="/login"
              >
                Login
              </Button>

              <Button
                variant="outline-Light"
                className="btn_sign_up m-2"
                as={Link}
                to="/sign-up"
              >
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavHead;
