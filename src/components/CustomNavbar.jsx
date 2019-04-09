import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css'

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar sticky="top" expand="lg" className="main-nav">
                <Navbar.Brand className="navbar-brand">
                    <img
                        src="/assets/logo.png"
                        width="93.33"
                        height="70"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-button-toggle"/>
                <Navbar.Collapse className="nav-menu-collapse">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link href="/Apply.jsx" className="nav-item">Apply</Nav.Link>
                        <NavDropdown title="Impact" id="basic-nav-dropdown" className="nav-item-drop">
                            <NavDropdown.Item href="./People.jsx" className="dropdown-nav-item">Why you Matter</NavDropdown.Item>
                            <NavDropdown.Item href="./People.jsx"className="dropdown-nav-item">Tab 01</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="How we work" id="basic-nav-dropdown" className="nav-item-drop">
                            <NavDropdown.Item href="./Teams.jsx"className="dropdown-nav-item">Teams</NavDropdown.Item>
                            <NavDropdown.Item href="./Programs.jsx" className="dropdown-nav-item">Programs</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Our Culture" id="basic-nav-dropdown" className="nav-item-drop">
                            <NavDropdown.Item href="./People.jsx" className="dropdown-nav-item">People</NavDropdown.Item>
                            <NavDropdown.Item href="./Life.jsx" className="dropdown-nav-item">Life at TIS</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Opportunities" id="basic-nav-dropdown" className="nav-item-drop">
                            <NavDropdown.Item href="./Apply.jsx" className="dropdown-nav-item">Search and Apply</NavDropdown.Item>
                            <NavDropdown.Item href="./Process.jsx" className="dropdown-nav-item">Our Process</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;