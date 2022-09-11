import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
class Recently extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      show: false,
    };
  }

  categorySelect = (event) => {
    event.preventDefault();
    let genres = event.target.value;
    
    
    axios
      .get(`${process.env.REACT_APP_URL}category?genres=${genres}`)

      .then((result) => {
        console.log(result.data);
        this.setState({
          games: result.data,
          show : true
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Form.Select
          id="genres"
          aria-label="Category"
          onChange={this.categorySelect}
        >
          <option>Select Category</option>
            <option value="racing">Racing</option>
          
          <option value="strategy">Strategy</option>
          <option value="card">Card</option>
          <option value="puzzle">Puzzle</option>
          <option value="arcade">Arcade</option>
        
          <option value="action">Action</option>
          <option value="family">Family</option>
          <option value="educational">Educational</option>
        </Form.Select>
        {this.state.show && (
          <div>
            {" "}
            {this.state.games.map((item) => {
              return (
                <div>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.image} alt="img" />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>Genres: {item.genres.join(" - ")}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        {item.parent_platforms.map((element) => {
                          return (
                            <div>
                              <h3>{element}</h3>
                            </div>
                          );
                        })}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {" "}
                        metacritic : {item.metacritic}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Recently;
