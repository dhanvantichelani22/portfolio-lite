import React from "react";
// import dhan from "../images/dhan.jpeg" - method-1
// const dhan = require("../images/dhan.jpeg") - method-2

const About = () => {
    // 
    return (
        <div className="heading">
            <h1>About Me</h1>
            <div className="profile">
                 {/* <img src={dhan} alt="logo"/>  - method-1 */}
                 {/* <img src={require("../images/dhan.jpeg")} alt="logo"/> - method-2 */}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lnBanQtBWnpRfa9C04z6jhLAHh3oK2HzeQ&usqp=CAU"/>
                <p>This is my profile</p>
            </div>
        </div>
        
    )
}
export default About;