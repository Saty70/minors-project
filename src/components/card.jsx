import React from "react";
import "../static/card.css";
const Card = ({ imageSrc, subjectName, pdfLink }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={subjectName} />
      <div className="card-content">
        <h3>{subjectName}</h3>
        <a href={pdfLink} target="_blank" rel="noopener noreferrer">
          Open PDF
        </a>
      </div>
    </div>
  );
};

export default Card;
