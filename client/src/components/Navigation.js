import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={process.env.PUBLIC_URL+'/GraphQL_Logo.png'} width="30" height="30" className="d-inline-block align-top" alt="GraphQL" />
            &nbsp;&nbsp;Nexus GraphQL</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/projects/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/streamitems/">Stream Items</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://localhost:4000/graphiql">GraphiQL</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://developer.knowledge-architecture.com">Nexus REST API</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}