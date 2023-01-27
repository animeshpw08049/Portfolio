import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
 
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src="https://mohitkss.github.io/static/media/html5.4e6edfe05f07c383e94f.png" style={{width:"55px" , height:"50px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://mohitkss.github.io/static/media/css3.845e8eb63836bef093cf.png" style={{width:"55px" , height:"50px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" style={{width:"55px" , height:"50px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <img src="https://mohitkss.github.io/static/media/git.b1472a80b81e487179cf.png" style={{width:"55px" , height:"50px"}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <CgCPlusPlus />
      </Col>
      
    </Row>
  );
}

export default Techstack;
