import React from 'react';
import { Form, Button, InputGroup, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { BsFillKeyFill } from 'react-icons/bs';
import { MdOutlineFingerprint } from 'react-icons/md';
import { useState } from 'react';
import axios from 'axios';

function NewPassword() {
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCPasswordChange = (event) => {
    setCPassword(event.target.value);
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://podcast-staging.onrender.com/api/v1/auth/reset-password",
        { password , cPassword, token}
      );
      setMessage("Password changed successfully!");
      setPassword("");
      setCPassword("");
      setToken("");
      console.log(response.data);
      
    } catch (error) {
      setMessage("Failed to change password. Please try again later.");
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="new_password d-flex justify-content-center mt-5">
        <Form className="form_panel mb-3" onSubmit={handleSubmit}>
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
              value={token}
              onChange={handleTokenChange}
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
              value={password}
              onChange={handlePasswordChange}
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
              value={cPassword}
              onChange={handleCPasswordChange}
              required
            />
          </InputGroup>

          <Button variant="light" className="btn_login_page" type="submit">
            <span> Reset Password </span>
          </Button>
        </Form>
        <div>{message}</div>
      </div>
    </Container>
  );
}

export default NewPassword;
