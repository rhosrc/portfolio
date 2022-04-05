import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className='gray' light expand="lg">
          <NavbarBrand href="/">Lafortune Dot Dev</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/posts">Blog</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}