import React from "react";

const Service = () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className='service'>
      <h2>Welcome to my Service</h2>
      <p>You will get best service from me</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Service;
