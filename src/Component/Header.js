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
                            <Navbar.Brand href="./home" style={{ marginLeft: "10px" }}
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
                                <Nav.Link href="/about">About</Nav.Link>

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

        )
    }
}
export default Header;
