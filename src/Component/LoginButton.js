import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function LoginButton() {
const {isAuthenticated,loginWithRedirect,} = useAuth0();


  return !isAuthenticated && (
    <>

    <a class="btn btn-warning" onClick={loginWithRedirect} >Log in</a>
    </>
  );
}

export default LoginButton;