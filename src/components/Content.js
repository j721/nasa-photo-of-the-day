import React from 'react';

const NasaContent = props => {
    return (
      <div className="ContentFiller">
        <p>{props.date}</p>
        <p className ="paragraphs">{props.explanation}</p>
      </div>
    );
  };
  
  export default NasaContent;