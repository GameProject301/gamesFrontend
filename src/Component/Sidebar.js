import React from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

class Sidebar extends React.Component {

    render() {
        return (
            <>

                <div style={{
                    width: "20%", left: "0", top: "0",
                    height: "100%", width: "200px",
                    backgroundColor: "black", position: "fixed", overflow: "auto",


                }}>
                    <div style={{marginTop:"100px"}}></div>
                    <ButtonGroup vertical>
                    
      <Button href="./home">Button</Button>
      <Button href="./home">Button</Button>
      <Button href="./home">Button</Button>

    </ButtonGroup>
                </div>
            </>
        );
    }
}

export default Sidebar;


