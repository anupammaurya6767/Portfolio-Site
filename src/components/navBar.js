import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  navIcon1  from "../assets/img/nav-icon1.svg";
// import  navIcon2  from "../assets/img/nav-icon2.svg";
import  navIcon3  from "../assets/img/nav-icon3.svg";
import logo from '../assets/img/huf.png';
import { LinkContainer } from "react-router-bootstrap";


const NavBar = () => 
{
 

 return(
                <Navbar expand="md" className="scrolled">
                    <Container>
                        <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={logo} alt="Logo" />
                        </Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/"><Nav.Item className='active navbar-link navbar-link my-2 mx-2'><strong>Home</strong></Nav.Item></LinkContainer>
                             <LinkContainer to="/contact"><Nav.Item className='active navbar-link navbar-link my-2 mx-2'><strong>Connect</strong></Nav.Item></LinkContainer>
                            {/*<Nav.Item className='active navbar-link navbar-link my-2 mx-2 '><strong>Projects</strong></Nav.Item> */}
                        </Nav>
                        <span className="nav-text">
                           <div className="social-icon">
                             <a href="https://www.linkedin.com/in/anupam-maurya-b9a04a225/"><img src={navIcon1} alt=""/> </a>
                             <a href="https://www.instagram.com/noob_koda/"><img src={navIcon3} alt=""/> </a>
                           </div>
                        </span>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        );


}

export default NavBar;
