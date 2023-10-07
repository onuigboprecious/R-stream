import React from 'react';
import { Form, Button, InputGroup, Container } from 'react-bootstrap';
import { BsFillKeyFill } from 'react-icons/bs';
import { MdOutlineFingerprint } from 'react-icons/md';
// import { useState } from 'react';

function NewPassword() {
  

  return (
    <Container>
      <div className="new_password d-flex justify-content-center mt-5">
        <Form className="form_panel mb-3">
          <InputGroup className="mb-3" controlId="formGroupPassword">
            <InputGroup.Text id="basic-addon1" className="sign_icons">
              {' '}
              <MdOutlineFingerprint />{' '}
            </InputGroup.Text>
            <Form.Control
              placeholder="OTP"
              input
              type="text"
              id="token"
            />
          </InputGroup>

          <InputGroup className="mb-3" controlId="formGroupPassword">
            <InputGroup.Text id="basic-addon1" className="sign_icons">
              {' '}
              <BsFillKeyFill />{' '}
            </InputGroup.Text>
            <Form.Control
              placeholder="New Password"
              input
              type="password"
              id="password"
              required
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
              id="cPassword"
              required
            />
          </InputGroup>

          <Button variant="light" className="btn_login_page" type="submit">
            <span> Reset Password </span>
          </Button>
        </Form>
        <div>




        </div>
      </div>
    </Container>
  );
}

export default NewPassword;
