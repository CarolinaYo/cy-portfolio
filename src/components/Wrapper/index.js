import React from "react";
import "./style.css";
// import background from "../Images/background";

function Wrapper(props) {
  return <main className="wrapper">{props.children}</main>;
}

export default Wrapper;
