import React from "react"
import Jumbotron from "../Components/Jumbotron.jsx";
import Card from "../Components/Card.jsx"
import Footer from "../Components/Footer.jsx";



const Home =()=>{
    return(

        <div style={{paddingTop:"3rem"}} className="container">
        <Jumbotron/>
        <Card/>
        </div>
        
        

    )
};
export default Home;