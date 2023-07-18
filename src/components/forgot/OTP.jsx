// importations
import React from 'react';
import { Row, Col, Container, Form, Button, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OTP from '../../assets/otp.png';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ----------------------------------------------------------------

function Otp() {
  const [verificationId, setVerificationId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://podcast-staging.onrender.com/api/v1/auth/verify',
        {
          verificationId: verificationId,
        }
      );

      console.log(response.data);
      // handle successful verification here
      navigate('/login');
    } catch (error) {
      console.error(error);
      // handle verification error here
    }
  };



  

  return (
    <Container>
      <div className="forget_page mt-3">
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <img className="d-block w-100" src={OTP} alt="product_image" />
          </Col>
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
            <Form className="form_panel" onSubmit={handleSubmit}>
              <div className="opt_text flex flex-row justify-center text-center ">
                Enter OTP
              </div>
              <div
                id="otp"
                className="justify-center text-center"
              >
                <input
                  className=" border text-center form-control rounded"
                  placeholder="* * * * * *"
                  type="text"
                  id="first"
                  maxlength="6"
                  value={verificationId}
                  onChange={(event) => setVerificationId(event.target.value)}
                />
              </div>
              {/* ----------------Submit button for OTP------------------- */}
              <Button variant="light" className="btn_login_page" type="submit">
                Verify
              </Button>

              <NavLink className="reset_password_link" as={Link} to="/resend-verification">
                  Resend verification code!
                </NavLink>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Otp;
