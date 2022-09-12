import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavItem } from 'react-bootstrap';


function Welcome() {
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return isAuthenticated && (

      <span> Hi, {user.name}</span>
    
  );
}

export default Welcome;
