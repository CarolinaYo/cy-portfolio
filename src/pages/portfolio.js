// import { Container, Row, Col } from "../components/Grid";

import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import projects from "./projects.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects,
  };

  // Map over this.state.projects and render a Card component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>projects List</Title>
        {this.state.projects.map((project) => (
          <Card
            // removeproject={this.removeproject}
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            occupation={project.occupation}
            location={project.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
