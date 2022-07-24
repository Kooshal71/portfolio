import React, { useEffect } from "react";
import "../styles/Experience.css";
function transition() {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Entered");
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".activeSec").classList.remove("activeSec");
      document.getElementById(button.dataset.id).classList.add("activeSec");
    });
  });
}
export default function Experience() {
  useEffect(() => transition());
  return (
    <div className="container experienceSection">
      <h2 id="experience" style={{ display: "inline-block" }}>
        Tools I Work With
      </h2>
      <hr className="experienceHeader" />
      <div className="languages d-flex flex-row justify-content-around mt-4">
        <div className="tab d-flex flex-column align-items-start mb-3 controls">
          <button className="active-btn control4 control" data-id="react">
            React
          </button>
          <button className="control1 control" data-id="html">
            HTML
          </button>
          <button className="control2 control" data-id="css">
            CSS
          </button>
          <button className="control3 control" data-id="js">
            JavaScript
          </button>
          <button className="control5 control" data-id="bs">
            Bootstrap
          </button>
        </div>
        <div className="description">
          <section className="section html" id="html">
            <h4>HTML</h4>
            <ul>
              <li>Write modern HTML 5 syntax and tags along with new rules</li>
              <li>Complex HTML 5 forms</li>
              <li>Proper structuring of elements</li>
            </ul>
          </section>
          <section className="section css" id="css">
            <h4>CSS</h4>
            <ul>
              <li>Write modern CSS 3 syntax</li>
              <li>Using aesthetic designs and color combinations</li>
              <li>Proper naming convention and use of modern animations</li>
            </ul>
          </section>
          <section className="section js" id="js">
            <h4>JavaScript</h4>
            <ul>
              <li>Write ES6 modular code and syntax</li>
              <li>Using short and time efficient practices</li>
              <li>Thorough knowledge in DOM Manipulations</li>
            </ul>
          </section>
          <section className="section react activeSec" id="react">
            <h4>React</h4>
            <ul>
              <li>Specialize in React Framework</li>
              <li>Using modern React Hooks</li>
              <li>Knowledge in Multiple React libraries</li>
            </ul>
          </section>
          <section className="section bs" id="bs">
            <h4>BootStrap</h4>
            <ul>
              <li>Using Bootstrap for more than 1year</li>
              <li>Manipulate the classnames and logic of common elements</li>
              <li>
                Can personalise the stylings on top of the bootstrap library
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
