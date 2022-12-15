import React from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  Form,
  Button,
  NavLink,
  InputGroup,
} from 'react-bootstrap';
import {
  BsFillPersonCheckFill,
  BsFillEnvelopeFill,
  BsFillKeyFill,
  BsFillPersonFill
} from 'react-icons/bs';
import '../sign/Sign.css'
import { Link } from 'react-router-dom';
import sign_01 from '../../assets/sign_01.png';
import sign_02 from '../../assets/sign_02.png';
import sign_03 from '../../assets/sign_03.png';

function Sign() {
  return (
    <div className="Sign_section">
      <Container>
      <Row xm={12} sm={12} md={12} lg={12}>
      <Col xm={12} sm={12} md={6} >
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sign_01}
                  alt="login__photo"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sign_02}
                  alt="login__photo"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={sign_03}
                  alt="login__photo"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* -------------------------end of carousel----------------------- */}
          <Col className=" layout_panel_sign xm={12} sm={12} md={6} px-0">
            <Form className="form_panel_sign">
              <div className="intro_sign">We're Happy you're Joining!</div>
              <div className="intro_text_sign">It's quick and easy...</div>
              <div className="Sign">
                Already a member?
                <NavLink className="Sign_link" as={Link} to="/login">
                  Login
                </NavLink>
              </div>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className='sign_icons'>
                  {' '}
                  <BsFillPersonCheckFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  placeholder="Full Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className='sign_icons'>
                  {' '}
                  <BsFillPersonFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className='sign_icons'>
                  {' '}
                  <BsFillEnvelopeFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                />
              </InputGroup>

              <InputGroup className="mb-3" controlId="formGroupPassword">
                <InputGroup.Text id="basic-addon1" className='sign_icons'>
                  {' '}
                  <BsFillKeyFill />{' '}
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Password" />
              </InputGroup>

              <InputGroup className="mb-3" controlId="formGroupPassword">
                <InputGroup.Text id="basic-addon1" className='sign_icons'>
                  {' '}
                  <BsFillKeyFill />{' '}
                </InputGroup.Text>
                <Form.Control type="password" placeholder="Repeat Password" />
              </InputGroup>

              <div className="terms_cons">
                <Form.Check aria-label="option 1" /> <div> I have read And agreed to the



                <NavLink className="terms_cons_link" as={Link} to="/">
                  Terms & Conditions
                </NavLink> 
                  </div>
              </div>

              <Button variant="light" className="btn_Sign_page" type="submit">
                Sign Up
              </Button>
         
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sign;
