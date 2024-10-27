import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { studies, experiences } from "./data/resume";

function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <p>This is the resume page</p>

      <h2>Formation</h2>
      <ul>
        {studies.map((study) => (
          <li key={study.id}>
            <h3>{study.title}</h3>
            <p>Institution: {study.institution}</p>
            <p>Date: {study.date}</p>
          </li>
        ))}
      </ul>

      <h2>Experience</h2>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h3>{experience.title}</h3>
            <p>Enterprise: {experience.company}</p>
            <p>Date: {experience.date}</p>
          </li>
        ))}
      </ul>

      <Link to="/">Home</Link>
    </>
  );
}

export default Resume;