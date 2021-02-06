// import { Container, Row, Col } from "../components/Grid";

import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
// import Wrapper from "../components/Wrapper";
import projects from "../projects.json";

class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects,
  };

  // Map over this.state.projects and render a Card component for each friend object
  render() {
    return (
      <div>
        <Container fluid style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-2" />

            <Col size="md-8">
              <div className="title" style={{ marginTop: 10 }}>
                <h3>Projects</h3>
              </div>
              <hr />
              {this.state.projects.map((project) => (
                <ProjectCard
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  repository={project.repository}
                  deployment={project.deployment}
                />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;
