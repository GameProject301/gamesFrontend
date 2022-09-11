import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user } = useAuth0();
  const { isAuthenticated}=useAuth0();
  return isAuthenticated &&(
  
  
  <div className='hello'><h4>Hello {user.name}</h4></div>
  );
}

export default Profile;
