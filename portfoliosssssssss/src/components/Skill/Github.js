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
    
    <div style={{width:"80%", margin:"auto", boxSizing: "border-box", display:"grid", gridTemplateColumns: "repeat(2, 1fr)", gap:"10px",}}>
        <div style={{boxSizing: "border-box",}}>
          <img style={{width:"100%", boxSizing: "border-box",}} align="center"  src="https://github-readme-streak-stats.herokuapp.com/?user=animeshpw08049&theme=github-dark&border_radius=20"/>
      </div>

      <div style={{boxSizing: "border-box",}}>
          <img style={{width:"100%", boxSizing: "border-box", height:"95%"}} align="center" src="https://github-readme-stats.vercel.app/api?username=animeshpw08049&show_icons=true&theme=dark&border_radius=20"/>
      </div>

   </div>

   <div style={{width:"50%", margin:"auto", boxSizing: "border-box", marginTop:"1%"}}>
       <img style={{width:"100%", boxSizing: "border-box",  height:"70%"}} align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=animeshpw08049&layout=compact&border_radius=20"/>
     </div>

    </Row>
  );
}

export default Github;
