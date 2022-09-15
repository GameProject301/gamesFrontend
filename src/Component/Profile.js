

import GetINterested from "./GetInterested";

import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import MyList from "./myList"
import { withAuth0 } from '@auth0/auth0-react';
import "./styles/profile.css";
import Swal from 'sweetalert2'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
     
    };
  }
  handleUpdate =(event) =>{  
    event.preventDefault();
    const { user } = this.props.auth0;
    let email =user.email
  
    console.log("hi")
    const id = this.state.crtBook._id;
 let obj ={
  title: event.target.title.value,
  description: event.target.description.value,
  status: event.target.status.value,
  
 }
 axios
 .put(`${process.env.REACT_APP_URL}book/${id}?email=${email}`,obj)
 .then((result) => {
  console.log(result.data);
  this.setState({
    books: result.data,
  });
  this.handleClose();
})
.catch((err) => {
  console.log(err);
});

  }
  render() {
    const {user , isAuthenticated } = this.props.auth0;
    return (
      <div style={{marginTop:"30px"}}>
      <div style={{ marginLeft: "18%", padding:"0" }}>
<div class="container bc">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">

     { isAuthenticated && (
          <>
          <div class="col-lg-12">
              <div class="main-profile ">
                <div class="row">
                  <div class="col-lg-4">
                  
          <img variant="top" src={user.picture} alt={user.name} style={{"border-radius": '23px',width:"100%"}} />
          </div>
          <div class="col-lg-2 align-self-center">
          <div class="main-info header-text">
          
          <span>Online</span>
           <h4 class="ffa">{user.nickname}</h4>
         <h4>{user.email?user.email:'no email found'}</h4>
         <h3>intersted</h3>
         <h4 style={{"color":'red'}}>   <GetINterested></GetINterested></h4>
          
            </div>
            </div>
        
          
       
        

        
        </div>
        </div>
        </div>


{/* End of the user info */}

<div class="gaming-library profile-library">
            <div class="col-lg-12">
              <div class="heading-section">
                    
                            <h4><em>Your Added</em> Games</h4>

        <MyList></MyList>
        </div>
        </div>
        </div>
       
        </>
            )}
            </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
  }
}


export default withAuth0(Profile);

