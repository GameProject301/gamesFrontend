import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import supp from "./supp.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class ShowUpdate extends React.Component {
  render() {
    return (
      <div>
        <Modal show={this.props.showUp} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
           <Form className="upStyle" onSubmit={this.props.handleUpdate}>
          <Modal.Body>
           
              <Container>
                <Row className="up-f">
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Racing"
                        name="Interested"
                        value=" Racing ,"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Strategy"
                        name="Interested"
                        value=" Strategy ,"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Card"
                        name="Interested"
                        value=" Card ,"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="up-f">
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Puzzle"
                        name="Interested"
                        value=" Puzzle ,"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Arcade"
                        name="Interested"
                        value=" Arcade ,"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Action"
                        name="Interested"
                        value=" Action ,"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="up-f">
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Family"
                        name="Interested"
                        value=" Family ,"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6} md={4}>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Educational"
                        name="Interested"
                        value=" Educational ,"
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
          
          
          </Modal.Body>
          <Modal.Footer>
          <Button variant="primary" type="submit">
                Save Changes
              </Button>
              <Button variant="secondary" onClick={this.props.handleClose}>
                cancel
              </Button>
          </Modal.Footer>
          </Form>
        </Modal>  
      </div>
    );
  }
}
export default withAuth0(ShowUpdate);
