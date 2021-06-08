import React from "react";

import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function Header() {
  return (
    <div className="header header-4">
      <div className="header-wrapper">
        <Navbar className="navbar-transparent" expand="lg">
          <Container>
            <div className="navbar-translate">
              <button className="navbar-toggler" id="example-header-4">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
              <NavbarBrand href="/" onClick={(e) => e.preventDefault()}>
                Mercadito Interoceánico
              </NavbarBrand>
            </div>
            <UncontrolledCollapse navbar toggler="#example-header-4">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="/" onClick={(e) => e.preventDefault()}>
                      Mercadito Interoceánico
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="example-header-4">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="mx-auto" navbar>
                <NavItem className="active">
                  <NavLink href="/" onClick={(e) => e.preventDefault()}>
                    Inicio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" onClick={(e) => e.preventDefault()}>
                    Productos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" onClick={(e) => e.preventDefault()}>
                    Conócenos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" onClick={(e) => e.preventDefault()}>
                    Contáctanos
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav navbar-right" navbar>
                <NavItem>
                  <NavLink
                    href="https://twitter.com/CreativeTim"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.facebook.com/CreativeTim"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/CreativeTimOfficial"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
