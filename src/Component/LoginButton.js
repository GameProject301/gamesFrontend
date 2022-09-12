import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import {  Nav,NavItem } from 'react-bootstrap';



function LoginButton() {
  const { isAuthenticated, loginWithRedirect, } = useAuth0();


  return !isAuthenticated && (
    <>
      <Nav>

        <NavItem >
          <Button  onClick={loginWithRedirect} variant="warning">Login</Button>
        </NavItem> 
        </Nav>

    </>
  );
}

export default LoginButton;