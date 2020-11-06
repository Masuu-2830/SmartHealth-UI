import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Modal,
  Button,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    this.toggleNav();
    alert(
      "Username: " +
        this.username.value +
        "Password: " +
        this.password.value +
        "Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          style={{ backgroundColor: "#0fb4bf", minHeight: 100, fontSize: 20 }}
          dark
          expand="md"
        >
          <div className="container">
            <NavbarToggler dark onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto nav-brand" href="/home">
              SmartHealth
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="nav" navbar>
                <NavItem className="nav-item">
                  <NavLink
                    onClick={this.toggleNav}
                    className="nav-link"
                    to="/home"
                  >
                    <i className="fa fa-home fa-lg"></i> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.toggleNav}
                    className="nav-link"
                    to="/aboutus"
                  >
                    <i className="fa fa-child fa-lg"></i> AboutUs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.toggleNav}
                    className="nav-link"
                    to="/contactus"
                  >
                    <i className="fa fa-users"></i> ContactUs
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-sign-in fa-lg"> Login</span>
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NavBar;
