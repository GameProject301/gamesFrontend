import React from "react";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import './alaa.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Swal from 'sweetalert2';
class PC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      parent_platforms: "1",
      // showButton : false
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
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'Added successflly ',
        showConfirmButton: false,
        timer: 1500,
        confirmButtonColor: '#ffbe33',
        background:'#212529',
        iconColor:'#ffbe33',
        color:'rgb(248, 239, 239)'
      })
    })
    .catch((err) => {
      console.log(err);
    });

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
      <div style={{marginTop:"100px"}}>
        <div style={{ marginLeft: "20%", padding:"0" }}>

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
                    <Button onClick={() => this.addGames(item)} variant="outline-danger">♥</Button>{' '}
                 
                </ListGroup>
                
              </Card>
            
            </div>
          );
        })}
      </CardGroup>

          </div>

        </div>
    );
  }
}

export default  withAuth0(PC);
