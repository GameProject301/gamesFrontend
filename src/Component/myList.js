import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    
    };
  }
  deleteGame = (id) => {
    const { user } = this.props.auth0;
    let email =user.email
    axios
      .delete(`${process.env.REACT_APP_URL}games/${id}?email=${email}`)
      .then((result) => {
        this.setState({
          games: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount = () => {
    const { user } = this.props.auth0;
    let email =user.email
   console.log("hi")
    axios
      .get(
        `${process.env.REACT_APP_URL}mylist?email=${email}`
      )
   
      .then((result) => {
        console.log(result.data);
        this.setState({
          games: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>

        {this.state.games.map((item) => {
          return (
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt ="img"
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  Genres:  {item.genres.join(" - ")}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        {item.platforms.map((element) =>{
                            return (
                                <div>
                                   <h3>{element}</h3>
                                </div>
                            )
                        })}
                 </ListGroup.Item>
                 <ListGroup.Item> metacritic : {item.metacritic}</ListGroup.Item>
                 <Button onClick={() => this.deleteGame(item._id)} variant="outline-danger">delete</Button>{' '}

                </ListGroup>
               
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default  withAuth0 (MyList);
