import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { signUp } from '../../Auth/SupabaseAuth';
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
} from 'react-bootstrap';
import { BsFillEnvelopeFill, BsFillKeyFill } from 'react-icons/bs';
import '../sign/Sign.css';
import { Link } from 'react-router-dom';
import sign_01 from '../../assets/sign_01.png';
import sign_02 from '../../assets/sign_02.png';
import sign_03 from '../../assets/sign_03.png';

function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Show the loader when the form is submitted

      const user = await signUp(email, password);
      console.log('User signed up:', user);
      // Simulate a delay of 5 seconds before hiding the loader
        setTimeout(() => {
        setIsLoading(false); // Hide the loader after the delay
        navigate('/verification'); // redirect to verification page on success
        // You can add further logic here, such as redirecting to another page or displaying a success message.
      }, 5000);
    } catch (error) {
      setError(error.message);
      setIsLoading(false); // Hide the loader if an error occurs
    }
  };

  return (
    <div className="Sign_section">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6} className="signin_slide">
            <Carousel fade>
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
            <Form className="form_panel_sign" onSubmit={handleSignUp}>
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
                  placeholder="Email"
                  input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autocomplete="on"
                />
              </InputGroup>

              <div className="terms_cons">
                <Form.Check aria-label="option 1" />{' '}
                <div>
                  {' '}
                  I have read And agreed to the
                  <NavLink className="terms_cons_link" as={Link} to="/">
                    Terms & Conditions
                  </NavLink>
                </div>
              </div>

              {isLoading ? (
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
                  onClick={handleSignUp}
                >
                  {isLoading ? 'Signing Up...' : 'Sign Up'}
                </Button>
              )}
              {error && <div variant="danger">{error}</div>}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Sign;
