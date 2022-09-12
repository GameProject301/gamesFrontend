import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './alaa.css';
import CardGroup from 'react-bootstrap/CardGroup';
class Generate extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          games: [],
   page:1,
show:false,
className:"",
className2:"",
        };
      }

   
      generateLess =async(e)=>{

        e.preventDefault();
        let page= this.state.page-1;
        if(page==1){
            page++;
        }
     
    axios
     .get(`http://localhost:3000/generate?&page=${page}`)
    
      .then((result) => {
        console.log(result.data);
        this.setState({
          games: result.data,
       page:page,
       
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }
    

 
generateMore =async(e)=>{

    e.preventDefault();
    let page= this.state.page+1;
 
axios
 .get(`${process.env.REACT_APP_URL}generate?&page=${page}`)

  .then((result) => {
    console.log(result.data);
    this.setState({
      games: result.data,
   page:page,
   show:true,
   className:"loadmore",
   className2:"loadLess"
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

    render(){

        return(
<>


<Button className={this.state.className}onClick={this.generateMore}>loadmore</Button>

{
this.state.show &&
<Button className={this.state.className2}onClick={this.generateLess}>previous</Button>
    }




{/* <Row xs={1} md={4} className="g-4"> */}
<CardGroup >
        {this.state.games.map((item) => {
          return (
            <div>
              <Card style={{ width: "18rem"}} className="alaa2">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt ="img"
              className="size"
                />
                <Card.Body className="cardbody" >
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  Genres:  {item.genres.join(" - ")}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" >
                    <ListGroup.Item className="listplatforms">
                        {item.parent_platforms.map((element) =>{
                            return (
                                <div>
                                   <h3 className="platforms">{element}</h3>
                                </div>
                            )
                        })}
                 </ListGroup.Item>
                 <ListGroup.Item > metacritic : {item.metacritic}</ListGroup.Item>
                
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

</>

        )
    }
}
export default Generate;