import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
             I am Full Stack Web Developer and I fell in love with programming and I have at least learnt
              something, I think… 🤷 and I make user-friendly website.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, JAVA, HTML, CSS, Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products.  </b>
              </i>
               I built 3 major projects. Learned a great deal about teamwork, Leadership, and communication. After months of rigorous
               training, here I am looking for an opportunity as a MERN Stack Developer. 
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
               <img src={myImg}  alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Tilt>
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
