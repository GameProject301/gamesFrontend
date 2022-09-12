import React  from "react";
import LoginButton  from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { ReactSVG } from 'react-svg'
import Carousel from 'react-bootstrap/Carousel';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, NavItem } from 'react-bootstrap';



import { BsBoxArrowRight} from "react-icons/bs";
import Welcome from "../Component/Welcome"

import '../App.css';
class Header extends React.Component{
 
    render(){
     
        return(
        
       
<>

    {/* <div className="bg-box">
	<Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp6800894.jpg"
         
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp1943802.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    
    </div> */}
   
    <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="/">
           
           <span> 
GAMING

           </span>
			 
         
          </a>
      

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>
          
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className=" navbar-nav  mx-auto ">
           
              <li className="nav-item active">
                <a className="nav-link"  href="./">Home </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"  href="./" >Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"   href="./profile" >profile</a>

               
              </li>
              
              <li className="nav-item2">
              
                <a className="nav-link" >   <NavItem ><LoginButton/></NavItem> <NavItem ><LogoutButton/></NavItem>
 </a>
              </li>
             
             
           
</ul>
            <div className="user_option">
            
           
            <Welcome />
            </div>
          </div>
        </nav>
      </div>
    
	  </>
	
        )
    }
}
export default Header;