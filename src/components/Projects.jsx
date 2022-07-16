import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="container projectSection">
      <h2 id="project" style={{ display: "inline-block" }}>
        Projects Completed
      </h2>
      <hr />
      <div className="contents d-flex justify-content-evenly">
        <h4>YelpCamp</h4>
        <p className="YelpCamp">
          Hello! My name is Kushal and I enjoy developing websites. My interest
          in web development started back in 2020 when I stumbled across a few
          YouTube videos to and web development courses. Fast-forward to today,
          and I’ve completed a number of small applications. My main focus right
          now is being a successful freelancer in the given field while also
          pursuing Data Science as my main line of work.
        </p>
        <img
          src="xtz.png"
          alt="profile will fall here"
          style={{ display: "inline" }}
        />
      </div>

      <div className="contents d-flex justify-content-evenly">
        <h4>iNoteBook</h4>
        <br />
        <p className="iNoteBook">
          Hello! My name is Kushal and I enjoy developing websites. My interest
          in web development started back in 2020 when I stumbled across a few
          YouTube videos to and web development courses. Fast-forward to today,
          and I’ve completed a number of small applications. My main focus right
          now is being a successful freelancer in the given field while also
          pursuing Data Science as my main line of work.
        </p>
        <img
          src="xtz.png"
          alt="profile will fall here"
          style={{ display: "inline" }}
        />
      </div>

      <div className="contents d-flex justify-content-evenly">
        <h4>Atomic Heroes</h4>
        <p className="Atomic Heroes">
          Hello! My name is Kushal and I enjoy developing websites. My interest
          in web development started back in 2020 when I stumbled across a few
          YouTube videos to and web development courses. Fast-forward to today,
          and I’ve completed a number of small applications. My main focus right
          now is being a successful freelancer in the given field while also
          pursuing Data Science as my main line of work.
        </p>
        <img
          src="xtz.png"
          alt="profile will fall here"
          style={{ display: "inline" }}
        />
      </div>
    </div>
  );
}
