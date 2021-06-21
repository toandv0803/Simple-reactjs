import React from "react";
import { Form, Nav, Navbar } from "react-bootstrap";
export default function Header() {
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
