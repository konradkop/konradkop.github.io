import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Icon } from "../icons/Icon";

function NavBarComponent({ onClickParticles, scrollToSection }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        data-bs-theme="dark"
        align="end"
        expand="sm"
        className="static-top  opacity-75"
        id="navbar"
      >
        <Container>
          <Form className="me-3 justify-content-center align-items-center">
            <Form.Check
              type="switch"
              id="custom-switch"
              onClick={onClickParticles}
            />
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => scrollToSection("intro")}>
                <Icon
                  iconName="Globe"
                  className="d-inline-block align-center"
                />{" "}
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("experience")}>
                <Icon
                  iconName="CodeSlash"
                  className="d-inline-block align-center"
                />{" "}
                Experience
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("websites")}>
                <Icon
                  iconName="Columns"
                  className="d-inline-block align-center"
                />{" "}
                Portfolio
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact")}>
                <Icon
                  iconName="Envelope"
                  className="d-inline-block align-center"
                />{" "}
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
