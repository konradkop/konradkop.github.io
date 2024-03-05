import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "../../icons/Icon";

export default function WebsitePage({ scrollToSection }) {
  return (
    <Container>
      <Row>
        <p class=" text-md-start" style={{ fontSize: "4.4rem" }}>
          Portfolio
        </p>
        <span
          class="text-md-start"
          style={{ fontSize: "1.4em", opacity: "50%" }}
        >
          Primarily just for interviewers to see a sample of my work
        </span>
        <span
          class="text-md-start"
          style={{ fontSize: "1.4em", opacity: "50%" }}
        >
          If you are interested in me developing your website, contact me for
          rates
        </span>
      </Row>
      <Container
        style={{
          height: "60vh",
          padding: "5%",
        }}
      >
        <Row className="justify-content-md-center ">
          <Col xs>
            <Container>
              <Row
                className="justify-content-md-center"
                style={{ fontSize: "1.5em" }}
              >
                Food delivery app
              </Row>
              <Row
                className="justify-content-md-center"
                style={{ opacity: "50%" }}
              >
                 React Native, NativewindCSS, Redux, Sanity.io, Google Maps API, deployed on Netlify
              </Row>
              <Row className="justify-content-md-center">
                <Col>
                  <a href={"https://konrad-delivery-app.netlify.app"}>Link</a>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs>
            <Container>
              <Row
                className="justify-content-md-center"
                style={{ fontSize: "1.5em" }}
              >
                Twitter clone
              </Row>
              <Row
                className="justify-content-md-center"
                style={{ opacity: "50%" }}
              >
                ReactNative, Express.js
              </Row>
              <Row
                className="justify-content-md-center"
                style={{ color: "red", padding: "20px" }}
              >
                Under development- links don't work yet
              </Row>
              <Row className="justify-content-md-center">
                <Col>
                  <a href={""}>Source Code</a>
                </Col>
                <Col>
                  <a href={""}>Live Site</a>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <hr />
        <Row className="justify-content-md-center">
          <Col xs>
            <Container>
              <Row className="justify-content-md-center"></Row>
              <Row className="justify-content-md-center"></Row>
              <Row className="justify-content-md-center">
                <Col></Col>
                <Col></Col>
              </Row>
            </Container>
          </Col>
          <Col xs>
            <Container>
              <Row className="justify-content-md-center"></Row>
              <Row className="justify-content-md-center"></Row>
              <Row className="justify-content-md-center">
                <Col></Col>
                <Col></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Row>
        <Icon
          iconName="ChevronDown"
          size={96}
          className="down-arrow d-inline-block align-center d-none d-lg-block "
          onClick={() => scrollToSection("contact")}
        />
      </Row>
    </Container>
  );
}
