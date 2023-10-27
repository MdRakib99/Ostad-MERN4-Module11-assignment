import React from "react";

const Hero = () => {
  const isLoggedin = false;
  return (
    <div className='hero'>
      {isLoggedin ? <p>Welcome, User!</p> : <p>Please log in.</p>}
      <h2>Welcome to My Hero component</h2>
      <p>This is the Hero component.</p>
    </div>
  );
};

export default Hero;
