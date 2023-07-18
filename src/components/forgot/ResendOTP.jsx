import React from 'react'
import { Row, Col, Container, Form, Button, InputGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import OTP from '../../assets/otp.png';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function ResendOTP() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://podcast-staging.onrender.com/api/v1/auth/resend',
        {
          email: email,
        }
      );

      console.log(response.data);
      // handle successful verification here
      navigate('/verification');
    } catch (error) {
      console.error(error);
      // handle verification error here
    }
  };

  return(

    <Container>
    <div className="forget_page mt-3">
      <Row xm={12} sm={12} md={12} lg={12}>
        <Col xm={12} sm={12} md={6}>
          <img className="d-block w-100" src={OTP} alt="product_image" />
        </Col>
        <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
          <Form className="form_panel" onSubmit={handleSubmit}>
          <div className="opt_text mb-3 flex flex-row justify-center text-center ">
             Enter your registerd Email address to receive OTP
              </div>
            <div
              id="otp"
              className="justify-center text-center"
            >
             <InputGroup className="mb-3" controlId="formGroupEmail">
                <InputGroup.Text id="basic-addon1" className="login_icons">
                  {' '}
                  <BsFillEnvelopeFill />{' '}
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Example@refinipee.com"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </InputGroup>
            </div>
            {/* ----------------Submit button for OTP------------------- */}
            <Button variant="light" className="btn_login_page" type="submit">
              Verify
            </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}


export default ResendOTP