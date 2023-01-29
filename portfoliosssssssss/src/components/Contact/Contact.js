import React from "react";
import Card from "react-bootstrap/Card";
import { CgMail, CgPhone, } from "react-icons/cg";
import {AiOutlineHome,} from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub,AiOutlineTwitter,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <Container  style={{boxShadow:" 0 0 5px #87209e",textShadow:" 0 0 2px #87209e", width:"50%", marginTop:"8%", paddingTop:"1%", borderRadius:"10px"}}>
        <blockquote className="blockquote mb-0">

        <div style={{marginTop:"7%",textAlign:"center"}}>

          <h1 style={{fontSize:"50px", fontWeight:"bold", letterSpacing:"1px"}}>Contact Info</h1>

           <div style={{ flex:"1 1 48rem",padding:"2rem 1rem",paddingLeft: "6rem",textAlign:"center"}}>
               <h3 style={{fontSize: "2rem",color:"var(--yellow)",padding:"1rem 0",fontWeight: "normal"}}>
               <CgMail style={{ marginBottom: "2px", marginRight:"1%"}} /> animeshkumar2812@gmail.com
                </h3>

               <h3 style={{fontSize: "2rem",color:"var(--yellow)",padding:"1rem 0",fontWeight: "normal"}}>
               <CgPhone style={{ marginBottom: "2px", marginLeft:"-38%",  marginRight:"1%"}} /> +91 9650731805 
                </h3>
               <h3 style={{fontSize: "2rem",color:"var(--yellow)",padding:"1rem 0",fontWeight: "normal"}}> 
               <CgPhone style={{ marginBottom: "2px", marginLeft:"-38%",  marginRight:"1%"}} /> +91 7667694853 
                </h3>
               <h3 style={{fontSize: "2rem",color:"var(--yellow)",padding:"1rem 0",fontWeight: "normal"}}> 
                 <AiOutlineHome style={{ marginBottom: "2px", marginLeft:"-22%",  marginRight:"1%"}} /> Munger, Bihar - 811211. 
                </h3>
           </div>
       </div>
        </blockquote>
        </Container>
      </Card.Body>

      <Container  style={{boxShadow:" 0 0 5px #87209e",textShadow:" 0 0 2px #87209e", width:"50%", marginTop:"2%", marginBottom:"5%", paddingTop:"1%", borderRadius:"10px"}}>
      <Container fluid className="home-about-section" id="about">
      <Container>
       
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{fontSize:"70px", marginTop:"-8%"}}>FIND ME ON</h1>
            <p style={{fontSize:"25px"}}>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/animeshpw08049"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub style={{fontSize:"55px",  marginTop:"10%"}} />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/@Animeshkashyap2"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter  style={{fontSize:"55px",  marginTop:"15%"}}  />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/animesh-kashyap-614ba4136/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn  style={{fontSize:"45px", marginTop:"15%"}}  />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </Container>
    </Card>  
  );
}

export default Contact;
