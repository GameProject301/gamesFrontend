import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './alaa.css';
function Profile() {
  const { user } = useAuth0();

  return (
  
  <div className='profile' >
    
    <h1>username: {user.name}</h1>
  
  
  </div>
  )
}

export default Profile;