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

class Interested extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
        showOne : true,
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  openInterrest = () => {
    this.setState({ showUp: true });
  };
 
    
 



  interestedAdd = (event) => { 
    event.preventDefault()
    console.log("hi intersted")
    var checkboxes = document.getElementsByName("Interested")
    var arr = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      arr.push(checkboxes[i].value)
    }
  }
  console.log(arr);
    
   
    const { user } = this.props.auth0;
        let obj ={
            email:user.email,
           interested: arr
        }
    console.log("hi");
    axios
      .post(
        `${process.env.REACT_APP_URL}interested`,obj)

      .then((result) => {
        console.log(result.data);
        this.setState({
          games: result.data,
          showOne:false
        });
      })
      .catch((err) => {
        console.log(err);
      });
      this.handleClose()
  };

  render() {
    return (
      <div className="card" >
        <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Header closeButton >
            <Modal.Title id="contained-modal-title-vcenter">
              Interested
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.interestedAdd} >
          <Modal.Body className="show-grid " style={{margin:"50px"}} >
          <h3>select  </h3>
              <Container >
                <Row>
                  <Col xs={6} md={4}>
             
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check style={{color:'white'}} type="checkbox" label="Racing"  name="Interested" value=" Racing ,"/>
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check  style={{color:'white'}} type="checkbox" label="Strategy" name="Interested" value=" Strategy ," />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check  style={{color:'white'}}type="checkbox" label="Card"  name="Interested" value =" Card ,"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check  style={{color:'white'}} type="checkbox" label="Puzzle" name="Interested" value=" Puzzle ," />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check  style={{color:'white'}} type="checkbox" label="Arcade" name="Interested" value=" Arcade ,"/>
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check style={{color:'white'}} type="checkbox" label="Action" name="Interested"  value=" Action ,"/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check style={{color:'white'}} type="checkbox" label="Family"  name="Interested" value=" Family ,"/>
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check style={{color:'white'}} type="checkbox" label="Educational" name="Interested" value=" Educational ," />
                    </Form.Group>
                  </Col>
                </Row>  
                  <Button type="submit"  >Done</Button>
              </Container>
              <Modal.Footer>
        
          </Modal.Footer>
            
          </Modal.Body>
         </Form>
        </Modal>
        {this.state.showOne&&<Button onClick={this.handleShow} variant="outline-danger">
        ADD my interested Genres
        </Button>}
        
      </div>
    );
  }
}
export default withAuth0(Interested);
