import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="animeshpw08049"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />  
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        MY <strong className="purple">STATISTICS</strong>
      </h1>
      <div style={{marginTop:"1%"}}>
        <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=animeshpw08049&theme=github-dark&border_radius=20"/>

        <img style={{marginLeft:"2%"}} align="center" src="https://github-readme-stats.vercel.app/api?username=animeshpw08049&show_icons=true&theme=dark&border_radius=20"/>
      </div>

     <div style={{marginTop:"1%"}}>
       <img style={{width:"40%"}} align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=animeshpw08049&layout=compact&border_radius=20"/>
     </div>

    </Row>
  );
}

export default Github;
