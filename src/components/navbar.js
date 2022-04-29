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
    this.closeNavbar = this.closeNavbar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  closeNavbar() {
    this.setState({
        isOpen: false
    });
  }
  handleClickOutside(event) {
    const t = event.target;
    if (this.state.isOpen && !t.classList.contains('navbar-toggler')) {
        this.closeNavbar();
    }
  }


  render() {
    return (
      <div>
        <Navbar className='gray fixed-top' light expand="lg">
          <NavbarBrand className='header-name' href="/">Chris Lafortune</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/#about" onClick={this.closeNavbar}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#projects" onClick={this.closeNavbar}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact" onClick={this.closeNavbar}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/posts" onClick={this.closeNavbar}>Blog</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}