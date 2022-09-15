import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { withAuth0 } from "@auth0/auth0-react";

import CardGroup from 'react-bootstrap/CardGroup';
import './alaa.css';
import Swal from 'sweetalert2'


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      show: false,
    };
  }
  addGames = (item) => {
    const { user } = this.props.auth0;
    let obj = {
      name: item.name,
      image: item.image,
      platforms: item.parent_platforms,
      metacritic: item.metacritic,
      genres: item.genres,
      email: user.email,
    };
    console.log(obj);

    axios
      .post(`${process.env.REACT_APP_URL}games`, obj)
      .then((result) => {
        // this.setState({
        //   showButton:true,
        // });
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'Added successflly ',
          showConfirmButton: false,
          timer: 1500,
          confirmButtonColor: '#FFBE33',
          background:'#212529',
          iconColor:'#FFBE33',
          color:'rgb(248, 239, 239)'
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };
  categorySelect = (event) => {
    event.preventDefault();
    let genres = event.target.value;
    console.log(genres)
    let url = `${process.env.REACT_APP_URL}category?genres=${genres}`
    console.log(url)
    axios
      .get(url)

      .then((result) => {
        console.log(result.data);
        this.setState({
          games: result.data,
          show: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
      <div style={{marginTop:"100px",}}>
        <div style={{ marginLeft: "20%", padding:"0" }}>
      <div class="most-popular">
      <div class="heading-section">
      <h4> Serach by Category</h4>
    </div>
      <CardGroup >
      <div>
        <Form.Select style={{padding:"auto"}}
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
          <CardGroup >
            {" "}
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
        )}
      </div>
      </CardGroup>
      </div>
      </div>
      </div>
      </>
    );
  }
}



export default withAuth0(Category);

