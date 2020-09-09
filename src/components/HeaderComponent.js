import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked)
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                         Home
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        About Us
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        Products
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'>
                                        Contact Us
                                        </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in fa-lg' /> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className='col-12 col-sm-6'>
                                <img src="assets/images/remora.gif" height="346" width="600" />
                            </div>
                            <div className="col-12 col-sm-6">
                                <h1>Remoree</h1>
                                <h4>The perfect smart task chair to work from home</h4>
                                <p>Remoree is a smart ergonomic-focused task chair which is highly customisable and configurable. It collects and processes the data of our customes' sitting habits and recommends a personalised configuration. By using Remoree, users will slowly take on better sitting posture wihich in turn increases comfort, health and productivity.</p>
                            </div>

                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Logiun</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username'
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password'
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' name='remember'
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )

    }
}

export default Header;