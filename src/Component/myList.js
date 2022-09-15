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
    alert("are you sure");
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
      <>

        {this.state.games.map((item) => {
          return (
            <div class="item">
              <ul>

              <li><img src={item.image} alt="" class="templatemo-item" style={{width:"300px"}}/></li>
              <li><h4> Game  </h4><span>{item.name}</span></li>
              <li> <h4>Genres</h4><span>{item.genres.join(" - ")}</span></li>
               {/* {item.platforms.map((element) =>{
                  
                            return (
                                
                                   <span>{element}</span>
                                
                            )
                        })}  */}
                            
                            <li><div  onClick={() => this.deleteGame(item._id)}class="main-border-button border-no-active"><a href="#">Delete</a></div></li>
              </ul>
              
            


         </div>
         
              )
                        
                        
                        })}


</>
 );
}
}
export default  withAuth0 (MyList);
