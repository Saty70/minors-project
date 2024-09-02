import React from 'react';
import { Navbar, Card } from './components';
import cardData from './utils/cardData';
import './app.css'

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="card-container">
        {cardData.map((card) => (
          <Card 
            key={card.id}
            imageSrc={card.imageSrc} 
            subjectName={card.subjectName}
            pdfLink={card.pdfLink} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;