import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBoxArrowRight} from "react-icons/bs";
import Button from 'react-bootstrap/Button';
function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <a class="btn btn-warning " onClick={() => {
      logout({ returnTo: window.location.origin });
    }}> <BsBoxArrowRight/> </a>
  );
}

export default LogoutButton;