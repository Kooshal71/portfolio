import React from "react";
import resume from "./resume.pdf";

export default function Resume() {
  return (
    <>
      <iframe
        src={resume}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
        title="xyz"
        style={{ height: "100vh" }}
      />
    </>
  );
}
