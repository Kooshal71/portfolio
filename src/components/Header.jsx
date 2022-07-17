import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="container top-portion" id="top">
      <p style={{ color: "#FCA311" }}>Hi, my name is</p>
      <h1 style={{ fontSize: "70px" }}>Kushal CG</h1>
      <h1>Web Developer and Data Scientist</h1>
      <div className="sub-section">
        <p>
          I'm a third year college student in{" "}
          <a
            href="https://pes.edu/"
            target={"_blank"}
            rel="noreferrer"
            className="university"
          >
            PES University
          </a>{" "}
          pursuing a degree in Computer Science. I aspire to work as a Data
          Scientist and also design websites as a freelancer.
        </p>
        <p>
          When I'm not on the computer, I enjoy working out, cycling and petting
          dogs.
        </p>
      </div>
    </div>
  );
}
