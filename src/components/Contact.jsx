import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="container contactSection">
        <p>If you've come this far...</p>
        <h2 id="contact" style={{ color: "#fca311" }}>
          Get In Touch
        </h2>
        <p>
          I'm currently looking for freelance and internship opportunities in
          Web Development. Click on the button to get in contact with me.
        </p>
        <button className="mailButton my-3">
          <a
            href="mailto:kushalganesh2@gmail.com"
            rel="noopener noreferrer"
            target={"_blank"}
          >
            Say Hello
          </a>
        </button>
        <div
          className="icons d-flex justify-content-evenly"
          style={{ margin: "50px 0" }}
        >
          <a
            href="https://github.com/Kooshal71"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.fiverr.com/share/W0wGzl"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <i className="fa-solid fa-briefcase fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kushal-c-g-558016209/"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-linkedin fa-2x"></i>
          </a>
        </div>
        <p style={{ marginBottom: "10px" }}>
          Website Inspired by{" "}
          <a
            href="https://brittanychiang.com/"
            target={"_blank"}
            rel="noreferrer noopener"
            className="credits"
          >
            Brittany Chiang
          </a>
        </p>
      </div>
    </>
  );
}
