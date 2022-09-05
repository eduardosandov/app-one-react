import React from "react";
import Header from '../components/Header';
const Home = ({ children }) => {
    return (
        <div>
            <Header />
            {children}

            <h2>Home</h2>
        </div> 
    );
  };
  
  export default Home;