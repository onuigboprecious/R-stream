import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';
import '../pages/Faq';
import '../pages/Price';
import '../pages/Support';
import { Link } from 'react-router-dom';
import { Nav, Col, Row, Container, Navbar, NavLink } from 'react-bootstrap';
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsFillEnvelopeFill,
} from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
      <Container className="footer_zip">
        <Row>
          <Col xm={12} sm={12} md={4}>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link className="socials" href="/facebook">
                  <BsFacebook />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="socials" eventKey="/twitter">
                  <BsTwitter />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="socials" eventKey="/instagram">
                  <BsInstagram />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="socials" eventKey="/Email">
                  <BsFillEnvelopeFill />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xm={12} sm={12} md={4}>
            <Nav className="quick_links justify-content-center">
              <Nav.Item>
                <NavLink as={Link} to="/about-us" className="quick_links">
                  About
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink as={Link} to="/price" className="quick_links">
                  Pricing
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink as={Link} to="/faq" className="quick_links">
                  FAQs
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink as={Link} to="/support" className="quick_links">
                  Support
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xm={12} sm={12} md={4}>
            <Nav className="justify-content-center">
              <Navbar.Brand>
                <img
                  src={logo}
                  alt="brand logo"
                  height={45}
                  className="brand_logo"
                />
              </Navbar.Brand>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
