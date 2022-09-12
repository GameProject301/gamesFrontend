import React from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import './alaa.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class PC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      parent_platforms: "1",
    };
  }

  componentDidMount = () => {
   console.log("hi")
    axios
      .get(
        `${process.env.REACT_APP_URL}games?parent_platforms=${this.state.parent_platforms}`
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
      // <Row xs={1} md={4} className="g-4">
<CardGroup>
        {this.state.games.map((item) => {
          return (
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt ="img"
                  className="size"
                />
                <Card.Body className="cardbody">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  Genres:  {item.genres.join(" - ")}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="listplatforms">
                        {item.parent_platforms.map((element) =>{
                            return (
                                <div>
                                   <h3 className="platforms">{element}</h3>
                                </div>
                            )
                        })}
                 </ListGroup.Item>
                 <ListGroup.Item> metacritic : {item.metacritic}</ListGroup.Item>
                
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </CardGroup>
    );
  }
}
export default PC;
