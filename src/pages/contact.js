import React from "react";
import { Container, Row, Col } from "../components/Grid";
import resume from "../components/Images/resume.pdf";

function Contact() {
  return (
    <div>
      <Container fluid style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-2" />
          <Col size="md-7">
            <div
              className="box"
              style={{
                backgroundColor: "#92909096",
                marginTop: 30,
                borderRadius: 10,
                padding: 20,
              }}
            >
              <div style={{ marginTop: 5 }}>
                <h4>Carolina | Contact</h4>
              </div>
              <hr style={{ backgroundColor: "#4aaaa5", height: 0.25 }} />

              <p>
                LinkedIn profile:
                <a
                  href="https://www.linkedin.com/in/yoedhanac"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  yoedhanac
                </a>
              </p>
              <p>
                GitHub profile:
                <a
                  href="https://github.com/CarolinaYo"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  CarolinaYo
                </a>
              </p>
              <p>
                Click
                <a href={resume} target="_blank" rel="noreferrer">
                  {" "}
                  here
                </a>{" "}
                to view resume.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
