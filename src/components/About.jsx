import React from "react";
import "../styles/About.css";
import profile from "./Photo.jpeg";

export default function About() {
  return (
    <div className="container aboutSection">
      <h2 id="about" style={{ display: "inline-block" }}>
        About Me
      </h2>
      <hr />
      <div className="contents d-flex justify-content-evenly">
        <p className="info flex-grow-1" style={{ paddingRight: "100px" }}>
          Hello! My name is Kushal and I enjoy developing websites. My interest
          in web development started back in 2020 when I stumbled across a few
          YouTube videos to and web development courses. Fast-forward to today,
          and I’ve completed a number of small applications. My main focus right
          now is being a successful freelancer in the given field while also
          pursuing Data Science as my main line of work.
        </p>
        <img
          src={profile}
          alt="profile will fall here"
          style={{
            display: "inline",
            height: "200px",
            width: "200px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}
