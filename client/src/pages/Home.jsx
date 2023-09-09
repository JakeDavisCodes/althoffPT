import React from 'react';
import ReactDOM from 'react-dom/client';

const Home = () => {
  return (
    <div>
      Home
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
    </div>
   );
};

ReactDOM.createRoot(document.getElementById("root")).render(Home)