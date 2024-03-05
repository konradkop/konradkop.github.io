import React from "react";
import NavBarComponent from "../navBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import IntroPage from "../pages/introPage/IntroPage";
import ExperiencePage from "../pages/experiencePage/ExperiencePage";
import WebsitePage from "../pages/websitesPage/WebsitePage";
import ContactPage from "../pages/contactPage/ContactPage";

export default function Components({ onClickParticles }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBarComponent
        onClickParticles={onClickParticles}
        scrollToSection={scrollToSection}
      />
      <Container>
        <Row
          id="intro"
          className="justify-content-center align-items-center 
                       text-white "
          style={{ minHeight: "99vh" }}
        >
          <Col className="text-center">
            <IntroPage scrollToSection={scrollToSection} />
          </Col>
        </Row>
        <Row
          id="experience"
          className="justify-content-center align-items-center text-white "
          style={{
            minHeight: "100vh",

            padding: "10px",
          }}
        >
          <Col className="text-center">
            <ExperiencePage scrollToSection={scrollToSection} />
          </Col>
        </Row>
        <Row
          id="websites"
          className="justify-content-center align-items-center text-white "
          style={{
            minHeight: "100vh",

            padding: "10px",
          }}
        >
          <Col className="text-center">
            <WebsitePage scrollToSection={scrollToSection} />
          </Col>
        </Row>
        <Row
          id="contact"
          className="justify-content-center align-items-center text-white"
          style={{ minHeight: "100vh", padding: "10px" }}
        >
          <Col className="text-center">
            <ContactPage scrollToSection={scrollToSection} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
