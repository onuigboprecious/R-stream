import React  from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { supabase } from '../../Auth/SupabaseAuth';

function SignoutButton() {
   const handleSignout = async () => {
     try {
       let { error } = await supabase.auth.signOut();
       if (error) {
         // Handle error if signout fails
         console.error('Sign out error:', error.message);
         // You may want to show a notification to the user that signout failed
       } else {
         // Handle successful signout
         console.log('User signed out successfully');
         localStorage.clear(); // To clear Local Storage
         sessionStorage.clear(); // To clear Session Storage
         

         // You may want to redirect the user to a login page or another page after successful signout
       }
     } catch (error) {
       // Handle unexpected errors
       console.error('Unexpected error during signout:', error.message);
       // You may want to show a notification to the user that something went wrong
     }
   };



  return (
    <Button
      onClick={handleSignout}
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
