import React  from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/Authprovider';

function SignoutButton() {
   
  // eslint-disable-next-line no-unused-vars
  const { auth, signOut } = useAuth();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Button
      onClick={handleLogout}
      variant="outline-light"
      className="btn_sign_up m-2"
      as={Link}
      to="/"
    >
      Logout
    </Button>
  );
}

export default SignoutButton;
