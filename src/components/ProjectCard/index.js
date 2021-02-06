import React from "react";
import "./style.css";
// import images from "../Images/projects";

function ProjectCard(props) {
  // console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <a href={props.deployment} target="_blank" rel="noreferrer">
          <img alt={props.name} src={props.image} />
        </a>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <p>{props.description}</p>
          </li>
        </ul>
        <div className="links-container">
          <a href={props.repository} target="_blank" rel="noreferrer">
            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <a href={props.deployment} target="_blank" rel="noreferrer">
            <i className="fa fa-desktop fa-md" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
