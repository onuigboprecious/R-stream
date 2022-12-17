import React from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import OTP from '../../assets/otp.png';

function otp () {
  return (
    <Container>
      <div className="forget_page">
        <Row xm={12} sm={12} md={12} lg={12}>
          <Col xm={12} sm={12} md={6}>
            <img className="d-block w-100" src={OTP} alt="product_image" />
          </Col>
          <Col className=" layout_panel xm={12} sm={12} md={6} px-0">
            <Form className="form_panel">
              <div className="opt_text flex flex-row justify-center text-center ">Enter OTP</div>
              <div
                id="otp"
                className="flex flex-row justify-center text-center px-2 mt-2"
              >
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="first"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="second"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="first"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="second"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="first"
                  maxlength="1"
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  placeholder="_"
                  type="text"
                  id="second"
                  maxlength="1"
                />
              </div>

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

export default otp;
