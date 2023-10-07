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
import { supabase } from '../../Auth/SupabaseAuth';
// import {reset-password} from './NewPassword';

function Forget() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async () => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo:
          'https://refinipee.vercel.app/api/auth/callback?next=/reset-password',
      });
      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Password reset email sent successfully!');
      }
    } catch (error) {
      console.error('Error resetting password:', error.message);
    }
  };

  return (
    <Container>
      <div className="forget_page">
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <img className="d-block w-100" src={forget} alt="product_image" />
          </Col>
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
            <Form className="form_panel" onSubmit={handleReset}>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              <Button
                variant="light"
                className="btn_login_page"
                type="submit"
                onClick={handleReset}
              >
                Send Link
              </Button>
              <div data-aos="fade-up">
                {message && <Alert variant="danger">{message}</Alert>}
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Forget;
