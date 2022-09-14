import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import axios from "axios";
import CarouselRecommanded from "./assets/CarouselRecommanded";
import Form from "react-bootstrap/Form";
import { withAuth0 } from '@auth0/auth0-react';
import ListGroup from 'react-bootstrap/ListGroup';
class Getinterested extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        interested: [],
   
    };
  }


    
 



  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email =user.email
   console.log("hi")
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_URL}interested?email=${email}`
  //     )
   
  //     .then((result) => {
  //       console.log(result.data);
  //       this.setState({
  //         interested: result.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  };
  render() {
    return (
      <div>
          {/* <ListGroup.Item>
                        {this.state.interested.map((element) =>{
                            return (
                                <div>
                                   <h1>{element.email}</h1>
                                </div>
                            )
                        })}
                 </ListGroup.Item> */}
        
      </div>
    );
  }
}
export default withAuth0(Getinterested);
