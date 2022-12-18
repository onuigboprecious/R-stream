// importations
import React from 'react';
import { Link } from 'react-router-dom';
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
import { BsFillEnvelopeFill, BsFillKeyFill } from 'react-icons/bs';
import login_01 from '../../assets/login_01.png';
import login_02 from '../../assets/login_02.png';
import login_03 from '../../assets/login_03.png';
//for OTP and Forget page
import '../login/Login.css';
import '../forgot/Forget';

function Login() {
  return (
    <div className="Login_section">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={login_01}
                  alt="login__photo"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={login_02}
                  alt="login__photo"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={login_03}
                  alt="login__photo"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* -------------------------end of carousel----------------------- */}
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
            <Form className="form_panel">
              <div className="intro">Welcome!</div>
              <div className="login">
                Not yet a member?
                <NavLink className="signUp_link" as={Link} to="/sign-up">
                  Sign up
                </NavLink>
              </div>

              <InputGroup className="mb-3" controlId="formGroupEmail">
                <InputGroup.Text id="basic-addon1" className="login_icons">
                  {' '}
                  <BsFillEnvelopeFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Example@refinipee.com"
                />
              </InputGroup>

              <InputGroup className="mb-3" controlId="formGroupPassword">
                <InputGroup.Text id="basic-addon1" className="login_icons">
                  {' '}
                  <BsFillKeyFill />{' '}
                </InputGroup.Text>
                <Form.Control type="password" placeholder="**********" />
              </InputGroup>

              <div className="remember_me">
                <Form.Check aria-label="option 1" /> <div>Remeber Me</div>
              </div>

              <Button variant="light" className="btn_login_page" type="submit">
                Login
              </Button>

              <div className="reset_password">
                Forgot Password?
                <NavLink className="reset_password_link" as={Link} to="/Forgot">
                  Reset!
                </NavLink>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
