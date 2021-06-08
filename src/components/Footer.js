import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">Mercadito Interoceánico</h1>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink to="/index" tag={Link}>
                    Inicio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Productos
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3" xs="6">
              <Nav>
                <NavItem>
                  <NavLink
                    href="https://creative-tim.com/contact-us?ref=blkdspr-footer"
                    target="_blank"
                  >
                    Contáctanos
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://creative-tim.com/about-us?ref=blkdspr-footer"
                    target="_blank"
                  >
                    Conócenos
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Síguenos:</h3>
              <div className="btn-wrapper profile text-left">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/creativetim"
                  id="tooltip39661217"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip39661217">
                  Síguenos
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip206037619"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip206037619">
                  Dale me gusta
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple ml-1"
                  color="default"
                  href="https://dribbble.com/creativetim"
                  id="tooltip750293512"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip750293512">
                  Síguenos
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
