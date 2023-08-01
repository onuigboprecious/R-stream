import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginButton = () => {

  
  return (
    <Button variant="Light" className="btn_login m-2" as={Link} to="/login">
      Login
    </Button>
  );
};

export default LoginButton;
