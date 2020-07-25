import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #f98200;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;

    &:hover {
      color: black;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Help a Paw</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav"></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/privacypolicy">Privacy Policy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
