import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import MyList from "./myList"
import { withAuth0 } from '@auth0/auth0-react';
import GetINterested from "./GetInterested";
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
      isAuthenticated && (
        <div style={{marginTop:"100px"}}>
        <div style={{ marginLeft: "20%", padding:"0" }}>
          <div style={{  display: "flex",
          justifyContent:" space-around",
          margin: "50px 0px",overflow :"hidden "}}>
          <Card style={{ width: '18rem' , backgroundColor:"#212529" , color:"white"}}   >
          <Card.Img variant="top" src={user.picture} alt={user.name} />
          <Card.Body>
            <Card.Title>{user.nickname}</Card.Title>
            <Card.Text>
            Hi, {user.name}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush" >
            <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>{user.email?user.email:'no email found'} </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>{user.updated_at}</ListGroup.Item>
          
          </ListGroup>
          <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white" }}>  <GetINterested></GetINterested></ListGroup.Item>

        </Card>
       
        <MyList></MyList>
        </div>
        </div>
        </div>
            )
    );
  }
}


export default withAuth0(Profile);

