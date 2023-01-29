import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Animesh Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />I completed BSc in Computer Application from IGNOU. and I completed Diploma in GNIIT (Software Engineer) from NIIT. Passionate Full Stack Web Developer with skills in the MERN stack,
             I am learning Full Stack Web Development in Masai school.
             <br/>
             <br/>
            Skilled in problem- solving and execution of software tasks
             from start to finish. I look forward to joining a company where
              I can contribute to individual and company growth..
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore to New Place
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Animesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
