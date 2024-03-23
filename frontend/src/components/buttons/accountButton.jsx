import React from 'react'
import SignoutButton from './signoutButton';
import { Nav, NavDropdown, } from 'react-bootstrap';

function accountButton() {
  return (
    <div>
        
         <Nav className="ml-auto">
            <NavDropdown title="user"
            id="basic-nav-dropdown">

              
<NavDropdown.Item href="#">Profile</NavDropdown.Item>
              
<NavDropdown.Item href="#">Settings</NavDropdown.Item>

<NavDropdown.Divider />

<NavDropdown.Item> <SignoutButton /></NavDropdown.Item>
            </NavDropdown>
          </Nav>

    </div>
  )
}

export default accountButton