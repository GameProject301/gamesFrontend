
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, NavItem } from 'react-bootstrap';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Welcome from "./Welcome";
import NavDropdown from 'react-bootstrap/NavDropdown';





class Header extends React.Component {

    render() {

        return (


            <>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top"
                    style={{ padding: "15px" }} >
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://seeklogo.com/images/Y/yellow-pages-turkey-logo-6D09162597-seeklogo.com.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}
                            >ProPlayer</Navbar.Brand>
                        </Navbar.Brand>

                    </Container>

                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="./">Home</Nav.Link>
                                <Nav.Link href="/explore">Explore</Nav.Link>
                                <Nav.Link href="./" style={{ padding: "0 12px" }}><LoginButton /></Nav.Link>
                                <NavDropdown title={<Welcome />} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/support">
                                        Support
                                    </NavDropdown.Item>


                                </NavDropdown>
                                <NavItem ><LogoutButton /></NavItem>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

// import { BsBoxArrowRight} from "react-icons/bs";
// import Welcome from "../Component/Welcome"

// import '../App.css';
// class Header extends React.Component{
 
//     render(){
     
//         return(
        
       
// <>

//     {/* <div className="bg-box">
// 	<Carousel>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block w-100"
//           src="https://wallpapercave.com/wp/wp6800894.jpg"
         
//           alt="First slide"
//         />
//         <Carousel.Caption>
         
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           className="d-block w-100"
//           src="https://wallpapercave.com/wp/wp1943802.jpg"
//           alt="Second slide"
//         />
//         <Carousel.Caption>
          
//         </Carousel.Caption>
//       </Carousel.Item>
     
//     </Carousel>
    
//     </div> */}
   
//     <div className="container">
//         <nav className="navbar navbar-expand-lg custom_nav-container ">
//           <a className="navbar-brand" href="/">
           
//            <span> 
// GAMING

//            </span>
			 
         
//           </a>
      

//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className=""> </span>
//           </button>
          
         
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
//             <ul className=" navbar-nav  mx-auto ">
           
//               <li className="nav-item active">
//                 <a className="nav-link"  href="./">Home </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link"  href="./" >Menu</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link"   href="./profile" >profile</a>

               
//               </li>
              
//               <li className="nav-item2">
              
//                 <a className="nav-link" >   <NavItem ><LoginButton/></NavItem> <NavItem ><LogoutButton/></NavItem>
//  </a>
//               </li>
             
             
           
// </ul>
//             <div className="user_option">
            
           
//             <Welcome />
//             </div>
//           </div>
//         </nav>
//       </div>
    
// 	  </>
	
//         )
//     }
// }
// export default Header;


        )
    }
}
export default Header;

