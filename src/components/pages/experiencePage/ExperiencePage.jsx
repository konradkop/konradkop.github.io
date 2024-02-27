import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Icon } from "../../icons/Icon";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import mantraLogo from "../../../assets/mantraLogo.jpg";
import hsbcLogo from "../../../assets/hsbcLogo.png";
import swellLogo from "../../../assets/swellLogo.png";
import konradPDF from "../../../assets/Konrad_resume.pdf";

export default function ExperiencePage({ scrollToSection }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <p class=" text-md-start" style={{ fontSize: "4.4rem", margin: 0 }}>
          Experience
        </p>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          indicators={false}
          touch={true}
          style={{ height: "70vh" }}
        >
          <Carousel.Item>
            <Container className=" justify-content-center align-items-center">
              <Row className="justify-content-center align-items-center">
                <Col xs={12} md={8} class="text-md-start" fluid>
                  <Row class="text-md-start">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        href="https://mantrahealth.com/"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          style={{
                            fontSize: "2.4em",
                          }}
                        >
                          Mantra Health
                        </span>
                      </a>
                      <Image
                        src={mantraLogo}
                        fluid
                        className="d-none d-lg-block "
                        style={{ maxWidth: "20%", height: "auto" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        class=" text-md-start"
                        style={{ fontSize: "1.4em", opacity: "50%" }}
                      >
                        Software Engineer
                      </p>
                    </div>
                  </Row>
                  <Row
                    style={{
                      overflow: "auto",
                      maxHeight: "56vh",
                    }}
                  >
                    <p class=" text-md-start">
                      Fullstack engineer at a health-tech startup which connects
                      connects college students with mental health providers
                    </p>
                    <p class=" text-md-start">
                      Developed a Node, Typescript, React based application
                      using GraphQL for requests, AWS and Aptible Postgres for
                      database storage, TypeOrm for database queries.
                    </p>
                    <p class=" text-md-start">
                      Oversaw significant engineering and business developments
                      due to joining as the 13th member which has since grown to
                      50+ people, onboarded and mentored 4 new hires since
                      joining
                    </p>
                    <p class=" text-md-start">
                      Led various projects which included significant changes to
                      prior business logic as well as the introduction of
                      completely new networks across various products, including
                      third party integrations and payment logic, company now
                      works with 110 campuses and 800,000+ students
                    </p>
                    <p class=" text-md-start">
                      70% of patients said the services they are receiving
                      through Mantra care have helped them stay enrolled in
                      school. 68% said the services they are receiving through
                      Mantra care have helped them perform better in school
                    </p>
                    <p class=" text-md-start">
                      Worked on the React Native to mobile app conversion,
                      focusing on deeplink and page integrity among others, the
                      app was successfully launched on the App and Play store
                      and is currently live and downloadable 5/5 stars, 300+
                      downloads since launching in Oct 2023
                    </p>
                    <p class=" text-md-start">
                      Handled mitigation of a potential security/compliance
                      issues including a massive amounts HIPAA-sensitive
                      customer data
                    </p>
                    <p class=" text-md-start">
                      Maintained readable and easily editable code using ESLint
                      and the Airbnb JavaScript Style. Testing written in Jest
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="justify-content-center align-items-center">
              <Row className="justify-content-center align-items-center">
                <Col xs={12} md={8} class="text-md-start" fluid>
                  <Row
                    style={{
                      overflow: "auto",
                      maxHeight: "55vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        href="https://www.us.hsbc.com/"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          class=" text-md-start "
                          style={{ fontSize: "2.4em" }}
                        >
                          HSBC
                        </span>
                      </a>
                      <Image
                        src={hsbcLogo}
                        fluid
                        className="d-none d-lg-block "
                        style={{ maxWidth: "20%", height: "auto" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        class=" text-md-start"
                        style={{ fontSize: "1.4em", opacity: "50%" }}
                      >
                        Financial/Data analyst
                      </p>
                    </div>
                  </Row>
                  <Row
                    style={{
                      overflow: "auto",
                      maxHeight: "55vh",
                    }}
                  >
                    <p class=" text-md-start">
                      Developed a Node.js/Puppeteer based script to parse
                      through company financial data, bypassing the need for
                      user-based inputs, negating user error, previously there
                      would have to be a dedicated analyst to spend a few hours
                      of their day going through documents
                    </p>
                    <p class=" text-md-start">
                      Harnessed SQL based data analysis software to iterate over
                      company data, enriching as well as joining it with other
                      data from company systems to output a user-readable format
                    </p>
                    <p class=" text-md-start">
                      Used SQL to query company data hosted on GCP’s BigQuery,
                      and provide updated and enriched financial information
                    </p>
                    <p class=" text-md-start">
                      Tracked over 2,000 active company clients and provided
                      monthly updates on each one for the rest of the bank,
                      using VBA, Excel, and other internal databases
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container className="justify-content-center align-items-center">
              <Row className="justify-content-center align-items-center">
                <Col xs={12} md={8} class="text-md-start" fluid>
                  <Row
                    style={{
                      overflow: "auto",
                      maxHeight: "55vh",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <a
                        href="https://getswell.io/"
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          class=" text-md-start "
                          style={{ fontSize: "2.4em" }}
                        >
                          Swell
                        </span>
                      </a>
                      <Image
                        src={swellLogo}
                        fluid
                        className="d-none d-lg-block "
                        style={{ maxWidth: "20%", height: "auto" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        class=" text-md-start"
                        style={{ fontSize: "1.4em", opacity: "50%" }}
                      >
                        Open Source Developer
                      </p>
                    </div>
                  </Row>
                  <Row
                    style={{
                      overflow: "auto",
                      maxHeight: "55vh",
                    }}
                  >
                    <p class=" text-md-start">
                      Contributed to an electron-based desk-top application
                      using Node and React/Redux, to allow users to send
                      client-side requests using REST, GraphQL, Websocket and
                      WebRTC for endpoint testing
                    </p>
                    <p class=" text-md-start">
                      Created custom React hooks to improve site responsiveness
                      and logic as well as used Redux to consolidate state
                      management, allowing for globally-scoped state access
                    </p>
                    <p class=" text-md-start">
                      Created binary data testing for websocket protocol,
                      enabling users to send blobs such as images, as well as
                      export logs, create Chai assertions with Mocha on their
                      requests, and create a custom websocket development server
                      for testing
                    </p>
                    <p class=" text-md-start">
                      React/Redux, Mocha and Chair tests were added primarily to
                      give the client a more well-defined testing suite. Image
                      limits are based on the client’s own server, which allows
                      them to more accurately assess the user experience
                    </p>
                    <p class=" text-md-start">
                      Added test code snippets to client-side requests, allowing
                      clients to test their servers. Users can write their own
                      tests within a NodeVM environment and/or use the
                      predefined snippet. Assertion tests are written in
                      Chai/Moch
                    </p>
                    <p class=" text-md-start">
                      Product developed under tech accelerator OS Labs
                      (opensourcelabs.io)
                    </p>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Row className="mt-3">
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
            <a href="https://github.com/konradkop">
              <Icon
                iconName="Github"
                size={40}
                className=" align-center icon"
              />
            </a>
          </Col>
          <Col>
            <a href={konradPDF} download="konrad_resume">
              <Icon
                iconName="Download"
                size={40}
                className=" align-center icon"
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Icon
            iconName="ChevronDown"
            size={96}
            className="down-arrow mt-4 d-inline-block align-center d-none d-lg-block "
            onClick={() => scrollToSection("websites")}
          />
        </Row>
      </Row>
    </Container>
  );
}
