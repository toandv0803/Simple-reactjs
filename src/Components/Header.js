import React, { Component } from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">React</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                        <Form inline></Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
