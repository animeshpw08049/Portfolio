import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/Bluemercury.png";
import bitsOfCode from "../../Assets/Projects/Nykaa.png";
import practo from "../../Assets/Projects/Practo.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bluemercury"
              description="Bluemercury.com is a leading luxury beauty retailer
              offering the best cosmetics, skin care, makeup, perfume,
              hair, and as well as in-store facials and spa treatments. 
               Developed along with a team of 4 members in one week. My task in this collaborative project was to make Cart or
               Payment page where we can add product and buy after
               that you can payment.
               HTML , CSS, Java Script. All these technology used to
               develop this project.
               "
             
              ghLink="https://github.com/animeshpw08049/bluemercury"
              demoLink="https://astonishing-parfait-8c3d13.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Nykaa"
              description="Nykaa is an Indian e-commerce company, founded by
              Falguni Nayar in 2012 and headquartered in Mumbai. It
              sells beauty, wellness and fashion products across
              websites, mobile apps and 100+ offline stores.
              Developed along with a team of 5 members in one week.
              My task in this project was to make Cart or Payment page
              where we can add product and buy after that you can
              payment.
              HTML , CSS, Java Script, ES6. All these technology used
              to develop this project.
              "
              ghLink="https://github.com/almightycoder4/nykaa-clone"
              demoLink="https://nyka.netlify.app/"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={practo}
              isBlog={false}
              title="Practo"
              description="Practo is revolutionizing healthcare by enabling 
              consumers to find the best doctors, book instant appointments, 
              consultations, and make better, more informed health decisions. 
              It is our privilege to work with Shashank ND and Abhinav Lal, to 
              scale and bring Practo to billions of consumers around the globe.
             Developed along with a team of 5 members in one week.
             Here we mainly worked on frontend.
             My task was to make Login or Signup Page with fully Funcationally.
             React, Node JS, Java Script, Redux, CSS"
              ghLink="https://github.com/RichieRich2020/practo.com_clone"
              demoLink="https://practo-clones.netlify.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
