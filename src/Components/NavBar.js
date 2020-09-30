import React, { Component } from 'react'
import { Nav, Alert } from 'react-bootstrap'
import { Link } from "react-router-dom";
export default class NavBar extends Component {
    render() {
        return (
            <Nav

                justify
                variant="tabs"

            >
                <Nav.Item>
                    <Nav.Link ><Link to="/">COVID-19 CORONAVIRUS PANDEMIC Stats</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/symptoms">  Symptoms</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/graphs">GRAPHS</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}
