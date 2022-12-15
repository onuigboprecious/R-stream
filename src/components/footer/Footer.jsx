import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { Nav, Col, Row, Container, Navbar } from 'react-bootstrap';
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsFillEnvelopeFill,
} from 'react-icons/bs';

function Footer() {
  return (
    <div className="footer">
      <Container className='footer_zip'>
        <Row>
          <Col xm={12} sm={12} md={4}>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link className='socials' href="/home">
                  <BsFacebook />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='socials' eventKey="/blog">
                  <BsTwitter />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  className='socials' eventKey="/legal">
                  <BsInstagram />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className='socials' eventKey="/help">
                  <BsFillEnvelopeFill />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xm={12} sm={12} md={4}>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link  className='footer_links' eventKey="/blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  className='footer_links' eventKey="/blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link   className='footer_links' eventKey="/legal">legal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link  className='footer_links' eventKey="/help">help</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col xm={12} sm={12} md={4}>
            <Nav className="justify-content-center">
              <Navbar.Brand>
                <img src={logo} alt="brand logo" height={40} />
              </Navbar.Brand>
              <div className="brand_name">Refinipee</div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
