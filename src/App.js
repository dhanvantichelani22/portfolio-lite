import React from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

let sectionData = [{title:"Skills",description:"Skills are good leadership"},{title:"Qualification",description:"Qualification are good leadership"},{title:"Project",description:"Project are newsapp through android studio"}]
const App = () => {
    return (
        <div>
            <Navbar/>
            <About/>
            { sectionData.map((value, index)=>(
              <Section 
              title = {value.title}
              description={value.description}
              
               />
            ))      
        }                
        <Footer/>
        </div>
    )
}
export default App;