import React from "react";
import "../styles/Projects.css";
import YelpCamp from "./YelpCamp.png";
import inotebook from "./iNotebook.png";
export default function Projects() {
  return (
    <div className="container projectSection">
      <h2 id="project" style={{ display: "inline-block" }}>
        Projects Completed
      </h2>
      <hr />
      <div className="contents d-flex flex-column justify-content-evenly">
        <div className="project1 mb-5 d-flex">
          <p className="YelpCamp">
            <h4>YelpCamp</h4>
            This is a Full Stack website created with MongoDB as data base and
            expressJS and nodeJS was used as backend services. Multiple REST
            APIs were created to help complete the CRUD Functionality. This was
            coded along with an online web development bootcamp on Udemy by Colt
            Steele
          </p>
          <img
            src={YelpCamp}
            alt="profile will fall here"
            style={{ display: "inline", height: "300px" }}
          />
        </div>
        <div className="project2 mt-5 d-flex">
          <img
            src={inotebook}
            alt="profile will fall here"
            style={{
              display: "inline",
              height: "300px",
              marginRight: "20px",
            }}
          />
          <br />
          <p className="iNoteBook">
            <h4>iNoteBook</h4>
            This is a Full Stack website created with the help of MongoDB as
            Database and expressJS and nodeJS was used as backend services. This
            project uses React for frontend and utilizes most of the React hooks
            and other Functionality.This was coded along with an online playlist
            found on Youtube created by Code With Harry
          </p>
        </div>
      </div>
    </div>
  );
}
