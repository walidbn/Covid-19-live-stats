import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default class NavBar extends Component {
    render() {
        return (



            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Covid-19 Live Stats</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <  Nav.Link ><Link to="/">Live Stats</Link></Nav.Link>
                        <Nav.Link><Link to="/symptoms">  Symptoms</Link></Nav.Link>
                        <Nav.Link><Link to="/graphs">GRAPHS</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}
