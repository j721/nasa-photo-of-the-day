import React from "react";

const NasaHeader = props => {
    return (
      <div className="HeaderContent">
        <nav>
          <a>Home</a>
          <a>Contact</a>
          <a>Previous Photos</a>
          <a>Send Photos</a>
        </nav>
        <h1>{props.title}</h1>
      </div>
    );
  };
  
  export default NasaHeader;
  