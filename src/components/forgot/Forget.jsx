import React, { useState } from 'react';
import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  Button,
  Alert,
} from 'react-bootstrap';
import forget from '../../assets/forget.png';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { useRef } from 'react';
import { useAuth } from '../../Context/Authprovider';
import './NewPassword';

function Forget() {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await passwordReset(emailRef.current.value);
      console.log(error);
      console.log(data);
      setMsg('Password reset link has been sent to your email');
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <Container>
      <div className="forget_page">
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <img className="d-block w-100" src={forget} alt="product_image" />
          </Col>
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
            <Form className="form_panel" onSubmit={handleSubmit}>
              <div className="login flex flex-row justify-center text-center">
                A reset link will be sent to this Email address
              </div>

              <InputGroup className="mb-3" controlId="formGroupEmail">
                <InputGroup.Text id="basic-addon1" className="login_icons">
                  <BsFillEnvelopeFill />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Example@refinipee.com"
                  type="email"
                  ref={emailRef}
                  required
                />
              </InputGroup>

              <Button
                variant="light"
                disabled={loading}
                className="btn_login_page"
                type="submit"
              >
                Send Link
              </Button>
              <div data-aos="fade-in">
                {msg && (
                  <Alert
                    variant="success"
                    onClose={() => setMsg('')}
                    dismissible
                  >
                    {msg}
                  </Alert>
                )}
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Forget;
