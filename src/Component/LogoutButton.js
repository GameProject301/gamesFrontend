import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBoxArrowRight} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import {  Nav,NavItem } from 'react-bootstrap';


function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
        <Nav>

<NavItem >
  <Button style={{padding:"0 8px 2px" , margin:"7px"}} onClick={() => {
      
      logout({ returnTo: window.location.origin });
    }} variant="warning"><BsBoxArrowRight/></Button>
</NavItem> 
</Nav>

  );
}

export default LogoutButton;

