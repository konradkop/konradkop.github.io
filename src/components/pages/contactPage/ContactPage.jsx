import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "../../icons/Icon";

export default function ContactPage({ scrollToSection }) {
  return (
    <Container>
      <Row>
        <p class=" text-md-start" style={{ fontSize: "4.4rem", margin: 0 }}>
          Contact
        </p>
      </Row>
      <Container
        style={{
          height: "60vh",
          padding: "5%",
        }}
      >
        <Row className="justify-content-md-center ">
          <Row>
            <Col>
              <a href="https://www.linkedin.com/in/konradkopko/">
                <Icon
                  iconName="Linkedin"
                  size={40}
                  className=" align-center icon"
                />
              </a>
            </Col>
            <Col>
              <a href="mailto:konradkopko01@gmail.com">
                <Icon
                  iconName="Envelope"
                  size={40}
                  className=" align-center icon"
                />
              </a>
            </Col>
            <Col>
              <a href="https://github.com/konradkop">
                <Icon
                  iconName="Github"
                  size={40}
                  className=" align-center icon"
                />
              </a>
            </Col>
          </Row>
        </Row>
      </Container>
      <Row>
        <Icon
          iconName="ChevronUp"
          size={96}
          className="down-arrow d-inline-block align-center d-none d-lg-block "
          onClick={() => scrollToSection("intro")}
        />
      </Row>
    </Container>
  );
}
