import React from 'react'

import { Container, Form, InputGroup, Button } from 'react-bootstrap';
// import forget from '../../assets/forget.png';
import { BsFillKeyFill  } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [Newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://podcast-staging.onrender.com/api/v1/auth/change-password',
        {

          currentPassword ,
          Newpassword,
          confirmpassword ,

        }
      );

      console.log(response.data);
      // handle successful resetId here
      navigate('/login');
    } catch (error) {
      console.error(error);
      // handle resetId error here
    }
  };

  return (
    

    <Container>
    <div className="new_password d-flex justify-content-center mt-5">
      <Form className="form_panel mb-3" onSubmit={handleSubmit}>
      <InputGroup className="mb-3" controlId="formGroupPassword">
          <InputGroup.Text id="basic-addon1" className="sign_icons">
            {' '}
            <BsFillKeyFill />{' '}
          </InputGroup.Text>
          <Form.Control
            placeholder="Current Password"
            input
            type="password"
            id="currentPassword "
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
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
            id="Newpassword"
            value={Newpassword}
            onChange={(event) => setNewPassword(event.target.value)}
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
            id="confirmpassword"
            value={confirmpassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </InputGroup>

        <Button variant="light" className="btn_login_page" type="submit">
          <span> Update Password </span>
        </Button>
      </Form>
    </div>
  </Container>




  )
}

export default ChangePassword