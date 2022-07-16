import React from "react";
import "../styles/Experience.css";

export default function Experience() {
  const handleHTML = () => {
    return 0;
  };
  const handleCSS = () => {
    return 0;
  };
  const handleJS = () => {
    return 0;
  };
  const handleReact = () => {
    return 0;
  };
  const handleBS = () => {
    return 0;
  };
  return (
    <div className="container experienceSection">
      <h2 id="experience" style={{ display: "inline-block" }}>
        Tools I Work With
      </h2>
      <hr className="experienceHeader" />
      <div className="languages d-flex flex-row justify-content-around mt-4">
        <div className="tab d-flex flex-column align-items-start mb-3">
          <button onClick={handleHTML}>HTML</button>
          <button onClick={handleCSS}>CSS</button>
          <button onClick={handleJS}>JavaScript</button>
          <button onClick={handleReact}>React</button>
          <button onClick={handleBS}>Bootstrap</button>
        </div>
        <div className="description">
          <section className="active">
            <h4>HTML</h4>
            <ul>
              <li>Write modern HTML 5 syntax and tags along with new rules</li>
              <li>Complex HTML 5 forms</li>
              <li>Proper structuring of elements</li>
            </ul>
          </section>
          <section className="active">
            <h4>CSS</h4>
            <ul>
              <li>Write modern HTML 5 syntax and tags along with new rules</li>
              <li>Complex HTML 5 forms</li>
              <li>Proper structuring of elements</li>
            </ul>
          </section>
          <section className="active">
            <h4>JavaScript</h4>
            <ul>
              <li>Write modern HTML 5 syntax and tags along with new rules</li>
              <li>Complex HTML 5 forms</li>
              <li>Proper structuring of elements</li>
            </ul>
          </section>
          <section className="active">
            <h4>React</h4>
            <ul>
              <li>Write modern HTML 5 syntax and tags along with new rules</li>
              <li>Complex HTML 5 forms</li>
              <li>Proper structuring of elements</li>
            </ul>
          </section>
          <section className="active">
            <h4>BootStrap</h4>
            <ul>
              <li>Write modern HTML 5 syntax and tags along with new rules</li>
              <li>Complex HTML 5 forms</li>
              <li>Proper structuring of elements</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
