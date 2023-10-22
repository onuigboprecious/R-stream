import React, { useState, useRef } from 'react';
import { supabase } from '../../Auth/SupabaseAuth';
import Loader from '../messages/load';
import {
  Container,
  Row,
  Col,
  Carousel,
  Form,
  Button,
  NavLink,
  InputGroup,
  Alert,
} from 'react-bootstrap';
import { BsFillEnvelopeFill, BsFillKeyFill } from 'react-icons/bs';
import '../sign/Sign.css';
import { Link} from 'react-router-dom';
import login_02 from '../../assets/login_02.png';

function Sign() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg('Please fill all the fields');
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg('');
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      if (!error && data) {
        setMsg(
          'Registration Successful. Check your email to confirm your account'
        ) 
      }
    } catch (error) {
      setErrorMsg('Error in Creating Account');
    }
    setLoading(false);
  };
  return (
    <div className="Sign_section">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6} className="signin_slide">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className=" d-block justify-content-center w-100 login_img"
                  src={login_02}
                  alt="login__photo"
                />
              </Carousel.Item>
            </Carousel>
          </Col>

          {/* -------------------------end of carousel----------------------- */}
          <Col className=" layout_panel_sign xm={12} sm={12} md={6} px-0">
            <Form className="form_panel_sign" onSubmit={handleSubmit}>
              <div className="intro_sign">We're Happy you're Joining!</div>
              <div className="intro_text_sign">It's quick and easy...</div>
              <div className="Sign">
                Already a member?
                <NavLink className="Sign_link" as={Link} to="/login">
                  Login
                </NavLink>
              </div>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1" className="sign_icons">
                  {' '}
                  <BsFillEnvelopeFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  placeholder="Refinipee@email.com"
                  input
                  type="email"
                  id="email"
                  ref={emailRef}
                  required
                  autocomplete="on"
                />
              </InputGroup>
              <InputGroup className="mb-3" controlId="formGroupPassword">
                <InputGroup.Text id="basic-addon1" className="sign_icons">
                  {' '}
                  <BsFillKeyFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  input
                  type="password"
                  id="password"
                  ref={passwordRef}
                  required
                  autoComplete="on"
                />
              </InputGroup>
              <InputGroup className="mb-3" controlId="formGroupPassword">
                <InputGroup.Text id="basic-addon1" className="sign_icons">
                  {' '}
                  <BsFillKeyFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  placeholder="Repeat Password"
                  input
                  type="password"
                  id="password"
                  ref={confirmPasswordRef}
                  required
                  autocomplete="on"
                />
              </InputGroup>

              <div className="terms_cons">
                <Form.Check aria-label="option 1" required />{' '}
                <div>
                  {' '}
                  I have read And agreed to the
                  <NavLink className="terms_cons_link" as={Link} to="/">
                    Terms & Conditions
                  </NavLink>
                </div>
              </div>

              {loading ? (
                // Show the loader when isLoading is true
                <div>
                  <Loader />
                </div>
                 ) : (
                // Show the "Sign Up" button when isLoading is false
                <Button
                  variant="light"
                  className="btn_Sign_page"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </Button>
              )}
              <div data-aos="fade-in">
                {errorMsg && (
                  <Alert
                    variant="transperent"
                    onClose={() => setErrorMsg('')}
                    dismissible
                    style={{ backgroundColor: '#fff', color: '#ff0303' }}
                  >
                    {errorMsg}
                  </Alert>
                )}
                {msg && (
                  <Alert
                    variant="treanspernt"
                    onClose={() => setMsg('')}
                    dismissible
                    style={{ backgroundColor: '#fff', color: '#10d738' }}
                  >
                    {msg}
                  </Alert>
                )}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Sign;
