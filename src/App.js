import React, { Component } from 'react';
import {Button, Navbar, NavbarBrand, NavbarToggler, NavItem, NavbarNav, Container, Row, Col, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Routes from './Routes';

const NavLink = require('react-router-dom').NavLink;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState(
      {modal: !this.state.modal}
    );
  }

  render() {
    return (
      <span>
      <Router>
        <div className="flyout">
          <Navbar color="grey darken-4" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
              МФК "КіПіШ"
            </NavbarBrand>
            <NavbarToggler />
            <div className="collapse navbar-collapse" id="reactNavbar">

              <NavbarNav className="ml-auto" right>
                <NavItem>
                  <NavLink className="nav-link" to="/">Головна</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/history">Історія</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/team">Склад</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='#' onClick={this.toggle}>Контакти</NavLink>
                </NavItem>
                
              </NavbarNav>

            </div>
          </Navbar>

          <main style={{marginTop: '1rem'}}>
            <Routes />
          </main>


          
          <div id="f">
            <Container>
              <Row className="centered">
                <Col>
                  <a href="#">
                    <i className="fa fa-twitter">facebook</i>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <i className="fa fa-facebook">VK.com</i>
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

      </Router>

      <Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Контакти</ModalHeader>
          <ModalBody>
            063-815-75-37
            <br/>
            Ігор Крещенко
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Закрити</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
      </span>
    );
  }
}

export default App;
