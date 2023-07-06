import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Container, Form, Button } from 'react-bootstrap'
import logo from './logo192.png'

export default class Header extends Component {
  render() {
    return (
     <Navbar collapsOnSelect expands="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" >
           <img 
              src= {logo} 
              height="30" 
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collaps id="responsive-navbar-nav" >
            <Nav className="mr-auto">
              <Nav.link href="/">My account</Nav.link>
              <Nav.link href="/">Log in</Nav.link>
              <Nav.link href="/">Sign up</Nav.link>
            </Nav>
            <Form inline>
              <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              />
              <Button variant="outline-info">Sign Up</Button>
            </Form>
        </Navbar.Collaps>
      </Container>
     </Navbar>
    )
  }
}
