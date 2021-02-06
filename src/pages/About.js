import React from "react";
import { Container, Row, Col } from "../components/Grid";
import photo from "../components/Images/carolyoe.jpg";
import { Link } from "react-router-dom";

function About() {
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
                <h3>Carolina | About Me</h3>
              </div>

              <hr style={{ backgroundColor: "#4aaaa5", height: 0.25 }} />
              <img src={photo} alt="Carolina" />
              <p>
                Hi, welcome to my portfolio. I am a current bootcamp student for
                <a
                  href="https://bootcamp.uw.edu/coding/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#464444", fontWeight: "bold" }}
                >
                  {" "}
                  Fullstack Web Development Program
                </a>{" "}
                offered through the University of Washington.
              </p>
              <p>
                I have developed projects using Html5, CSS3, Javascript, JQuery,
                Node.js, Express.js, and MySQL. Please check out my work at my
                <a
                  href="https://github.com/CarolinaYo"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#464444", fontWeight: "bold" }}
                >
                  {" "}
                  GitHub
                </a>{" "}
                account and in my{" "}
                <Link
                  to="/portfolio"
                  style={{ color: "#464444", fontWeight: "bold" }}
                >
                  Portfolio
                </Link>{" "}
                page.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
