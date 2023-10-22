import { React, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Authprovider';
import { supabase } from '../../Auth/SupabaseAuth';
import Alert from 'react-bootstrap/Alert';
import Loader from '../messages/load';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  NavLink,
  InputGroup,
} from 'react-bootstrap';
import {
  BsFillEnvelopeFill,
  BsFillKeyFill,
  BsSpotify,
  BsFacebook,
} from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import login_01 from '../../assets/login_01.png';
import './Login.css';
import '../forgot/Forget';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg('');
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg('Please fill in the fields');
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) navigate('/');
    } catch (error) {
      setErrorMsg('Email or Password Incorrect');
    }
    setLoading(false);
  };

  //third party auth services
  const handleSignInWithFacebook = async () => {
    setIsLoading(true);

    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    });

    if (error) {
      // Handle error
      setIsLoading(false);
      return;
    }

    // User is successfully logged in
    setIsLoading(false);
    // Redirect to your app's homepage or dashboard
  };

  const handleSignInWithSpotify = async () => {
    setIsLoading(true);

    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
    });

    if (error) {
      // Handle error
      setIsLoading(false);
      return;
    }

    // User is successfully logged in
    setIsLoading(false);
    // Redirect to your app's homepage or dashboard
  };

  const handleSignInWithGoogle = async () => {
    setIsLoading(true);

    // eslint-disable-next-line no-unused-vars
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      // Handle error
      setIsLoading(false);
      return;
    }

    // User is successfully logged in
    setIsLoading(false);
    // Redirect to your app's homepage or dashboard
  };

  return (
    <div className="Login_section">
      <Container>
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <img
              className="d-block justify-content-center w-100 login_img"
              src={login_01}
              alt="login__photo"
            />
          </Col>
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
            <Form className="form_panel" onSubmit={handleSubmit}>
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
                  placeholder="Refinipee@refinipee.com"
                  ref={emailRef}
                  autocomplete="on"
                  required
                />
              </InputGroup>

              <InputGroup className="mb-3" controlId="formGroupPassword">
                <InputGroup.Text id="basic-addon1" className="login_icons">
                  {' '}
                  <BsFillKeyFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="**********"
                  ref={passwordRef}
                  autocomplete="on"
                  required
                />
              </InputGroup>

              <div className="remember_me">
                <Form.Check aria-label="option 1" required />{' '}
                <div>Remeber Me</div>
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
                  {loading ? 'Logining in...' : 'Login'}
                </Button>
              )}

              <div className="thrid_party">
                <p>Or login with </p>
                <Row className="third_container">
                  <Col className="third_party_icons">
                    <Button
                      variant="transpernt"
                      className="spotiy_icon"
                      type="button"
                      onClick={handleSignInWithSpotify}
                    >
                      <BsSpotify />
                    </Button>
                  </Col>
                  <Col className=" third_party_icons">
                    <Button
                      variant="transpernt"
                      className='google_icon"'
                      type="button"
                      onClick={handleSignInWithGoogle}
                    >
                      <FcGoogle />
                    </Button>
                  </Col>
                  <Col className="third_party_icons ">
                    <Button
                      variant="transpernt"
                      className="facebook_icon"
                      type="button"
                      onClick={handleSignInWithFacebook}
                    >
                      <BsFacebook />
                    </Button>
                  </Col>
                </Row>
              </div>

              <div className="reset_password">
                Forgot Password?
                <NavLink className="reset_password_link" as={Link} to="/Forgot">
                  Reset!
                </NavLink>
              </div>
              <div data-aos="fade-in">
                {errorMsg && (
                  <Alert
                    className="alert_card "
                    variant="transpernt"
                    onClose={() => setErrorMsg('')}
                    dismissible
                    style={{ backgroundColor: '#fff', color: '#ff0303' }}
                  >
                    {errorMsg}
                  </Alert>
                )}
              </div>
            </Form>
          </Col>
          <Row>
            <Col></Col>
            <Col> </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
