import React, { useRef, useState } from 'react';
import { BsFillKeyFill} from 'react-icons/bs';
import '../forgot/Forget.css'
import Loader from '../messages/load';
import { Alert, Button,  Form, Container, InputGroup, } from 'react-bootstrap';
import { useAuth } from '../../Context/Authprovider';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const { updatePassword } = useAuth();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRef.current?.value || !confirmPasswordRef.current?.value) {
      setErrorMsg('Please fill all the fields');
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match. Try again");
      return;
    }
    try {
      setErrorMsg('');
      setLoading(true);
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await updatePassword(passwordRef.current.value);
      if (!error) {
        navigate('/');
      }
    } catch (error) {
      setErrorMsg('Error in Updating Password. Please try again');
    }
    setLoading(false);
  };

  return (
    <Container>
      <div
        xm={12}
        sm={12}
        md={12}
        lg={12}
        className="d-block justify-content-center"
      >
        <div className="update_password_panel ">
          <Form className="form_panel" onSubmit={handleSubmit}>
            <div className="update_password_intro">Update Password</div>

            <InputGroup className="mb-3" controlId="formGroupPassword">
              <InputGroup.Text id="basic-addon1" className="login_icons">
                {' '}
                <BsFillKeyFill />{' '}
              </InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordRef}
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
                placeholder="Repeat Password"
                ref={confirmPasswordRef}
                autocomplete="on"
                required
              />
            </InputGroup>

            {loading ? (
              // Show the loader when isLoading is true
              <div>
                <Loader />
              </div>
            ) : (
              // Show the "Sign Up" button when isLoading is false
              <Button
                variant="light"
                className="btn_login_page"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Updating...' : 'Update'}
              </Button>
            )}

  

            <div data-aos="slide-in">
              {errorMsg && (
                <Alert
                  className="alert_card"
                  variant="danger"
                  onClose={() => setErrorMsg('')}
                  dismissible
                >
                  {errorMsg}
                </Alert>
              )}
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default UpdatePassword;

