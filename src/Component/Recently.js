import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class Recently extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      
    };
  }
  addGames = (item)=>{
 
    const { user } = this.props.auth0;
    let obj ={
        name: item.name,
        image: item.image,
        platforms: item.parent_platforms,
        metacritic: item.metacritic,
        genres: item.genres,
        email: user.email
    }
    console.log(obj)
    
    axios
    .post(`${process.env.REACT_APP_URL}games`, obj)
    .then((result) => {
      // this.setState({
      //   showButton:true,
      // });
      alert("Game added")
    })
    .catch((err) => {
      console.log(err);
    });

  }
  componentDidMount = () => {
   console.log("hi")
    axios
      .get(
        `${process.env.REACT_APP_URL}recently`
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
                        {item.parent_platforms.map((element) =>{
                            return (
                                <div>
                                   <h3>{element}</h3>
                                </div>
                            )
                        })}
                 </ListGroup.Item>
                 <ListGroup.Item> metacritic : {item.metacritic}</ListGroup.Item>
                 <Button onClick={() => this.addGames(item)} variant="outline-danger">♥</Button>{' '}

                </ListGroup>
             
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withAuth0(Recently);

