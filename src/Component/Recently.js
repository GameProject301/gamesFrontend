import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';

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
      <>
      <div style={{marginTop:"100px"}}>
        <div style={{ marginLeft: "20%", padding:"0" }}>
      <div class="most-popular">
      <div class="heading-section">
      <h4>Recently Games</h4>
    </div>
      <CardGroup  >
        {this.state.games.map((item) => {
          return (
                     <div class="item">
              <Card style={{ width: "18rem" ,"background-color":"#CDC2AE" }} className="item">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt ="img"
                  className="size"
                />
                <Card.Body className="cardbody" style={{color:'black'}}>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  Genres:  {item.genres.join(" - ")}
                  </Card.Text>
                </Card.Body>
                 <ListGroup className="list-group-flush">
                    {/* <ListGroup.Item className="listplatforms">
                        {item.parent_platforms.map((element) =>{
                            return (
                                <div>
                                   <span className="platforms">{element}</span>
                                </div>
                            )
                        })}
                 </ListGroup.Item> */}
                 <ListGroup.Item  style={{"background-color":"#CDC2AE"}}> metacritic : {item.metacritic}</ListGroup.Item>
                    <Button onClick={() => this.addGames(item)} variant="outline-secondary">Add to my list</Button>{' '}
                </ListGroup>
              </Card>
              </div>
          );
        })}
      </CardGroup>
      </div>
      </div>
      </div>
      </>
    );
  }
}

export default withAuth0(Recently);

