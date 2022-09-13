import React from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ShowUpdate from "./ShowUpdate";
class GetINterested extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interested: [],
      showUp: false,
      show: false,
    };
  }
  handleUpdate = (event) => {
    const { user } = this.props.auth0;
    let email = user.email;
    event.preventDefault();
    console.log("hi");
    const id = this.state.interested._id;

    let obj = {
      email: user.email,
      interested: event.target.description.value,
    };
    axios
      .put(`${process.env.REACT_APP_URL}interested/${id}?email=${email}`, obj)
      .then((result) => {
        console.log(result.data);
        this.setState({
          interested: result.data,
        });
        this.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  openModal = () => {
    this.setState({
      showUp: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
      showUp: false,
    });
  };
  componentDidMount = () => {
    console.log("hi from getinterested");
    const { user } = this.props.auth0;
    let email = user.email;
    console.log("hi1");
    axios
      .get(`${process.env.REACT_APP_URL}interested?email=${email}`)

      .then((result) => {
        console.log(result.data);
        this.setState({
          interested: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {/* {this.state.interested.map((element) => {
          return (
            <Card style={{ width: "18rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{element.}</ListGroup.Item>
                <Button variant="warning" onClick={this.openModal()}>
                  update
                </Button>
              </ListGroup>
            </Card>
          );
        })} */}
{/* <p>{this.state.interested.interested}</p> */}
        <ShowUpdate
                 showUp = {this.state.showUp}
                 handleClose = {this.handleClose}
                 handleUpdate= {this.handleUpdate}
                 interested={this.state.interested}
                 ></ShowUpdate>
      </div>
    );
  }
}
export default withAuth0(GetINterested);
