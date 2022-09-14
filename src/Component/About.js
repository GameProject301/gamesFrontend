import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class About extends React.Component{
    render(){
  return (
    <div style={{ marginTop:"100px" }}>
      <h1 style={{color:"white",fontSize:"x-large" }}>Our project is Gaming web Application that render all games to the user by search to them and allowed to user make some operations such that:

Add game to favorite list.
Update information of game.
Delete game from list.
Get game information from API.</h1>
    <div className='us'>
    <Card className="person1" style={{ width: '18rem' } }>
      <Card.Img variant="top" src="https://avatars.GitHubusercontent.com/u/109727654?v=4" />
      <Card.Body className='bodyCard'>
        <Card.Title>Abdallah Mousa</Card.Title>
        <Card.Text>
          <h5>SoftWare Developer</h5>
          <a  href="https://GitHub.com/AbdallahMosa">GitHub</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
   
    <Card className="person4"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.GitHubusercontent.com/u/82683829?v=4" />
      <Card.Body>
        <Card.Title>Bashar Telfah</Card.Title>
        <Card.Text>
          <h5>SoftWare Developer </h5>
          <a  href="https://GitHub.com/Bashra99">GitHub</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className="person5"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.GitHubusercontent.com/u/109903994?v=4" />
      <Card.Body>
        <Card.Title>Ismail Al amir</Card.Title>
        <Card.Text>
          <h5>SoftWare Developer </h5>
          <a  href="https://GitHub.com/IsmailAlamir">GitHub</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className="person2" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.GitHubusercontent.com/u/70916159?v=4" />
      <Card.Body>
        <Card.Title>Alaa abualadoos</Card.Title>
        <Card.Text>
          <h5>SoftWare Developer</h5>
          <a  href="https://GitHub.com/alaa-adoos">GitHub</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card className="person3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://avatars.GitHubusercontent.com/u/109731916?v=4" />
      <Card.Body>
        <Card.Title>Ashar Momani</Card.Title>
        <Card.Text>
          <h5>SoftWare Developer </h5>
          <a  href="https://GitHub.com/Ashar121299">GitHub</a>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    </div>
  );
    }

}
export default About ;