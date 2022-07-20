import React from "react";
import Navbar from "./Components/Navbar.jsx"
import Home from "./Views/Home.jsx"
import Footer from "./Components/Footer.jsx";

const Layout =()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <Footer/>
        </>

    );
}
export default Layout