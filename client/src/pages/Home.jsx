import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      Home
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
    </div>
   );
};

export default Home