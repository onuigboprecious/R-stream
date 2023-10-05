import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../Auth/SupabaseAuth';
import Alert from 'react-bootstrap/Alert';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  NavLink,
  InputGroup,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsFillEnvelopeFill, BsFillKeyFill } from 'react-icons/bs';
import login_01 from '../../assets/login_01.png';
import './Login.css';
import '../forgot/Forget';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const user = await signIn(email, password);
      console.log('User signed in:', user);
      setIsLoading(false);
      navigate('/live');
      window.location.reload(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
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
            <Form className="form_panel" onSubmit={handleSignIn}>
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
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="on"
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
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="on"
                />
              </InputGroup>

              <div className="remember_me">
                <Form.Check aria-label="option 1" /> <div>Remeber Me</div>
              </div>

              <Button
                variant="light"
                className="btn_login_page"
                type="submit"
                onClick={handleSignIn}
              >
                <span>{isLoading ? 'logining In...' : 'Login'}</span>
              </Button>

              <div className="reset_password">
                Forgot Password?
                <NavLink className="reset_password_link" as={Link} to="/Forgot">
                  Reset!
                </NavLink>
              </div>

              <div data-aos="fade-up">
                {error && <Alert variant="danger">{error}</Alert>}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
