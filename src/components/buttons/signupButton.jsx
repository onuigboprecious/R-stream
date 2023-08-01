import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupButton = () => {
    
  return (
    <Button
      variant="outline-Light"
      className="btn_sign_up m-2"
      as={Link}
      to="/sign-up"
    >
      Sign up
    </Button>
  );
};

export default SignupButton;
