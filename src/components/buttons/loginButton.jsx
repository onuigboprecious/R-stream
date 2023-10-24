import React from 'react';
import { Button } from 'react-bootstrap';
import '../login/Login';

const LoginButton = () => {
  return (
    <Button href="/login" variant="Light" className="btn_login m-2">
      Login
    </Button>
  );
};

export default LoginButton;
