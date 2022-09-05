import React from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";
const Home = ({ children }) => {
    return (
        <div>
            <Header />
            {children}

            <h2>Home</h2>
            <Footer />
        </div> 
    );
  };
  
  export default Home;