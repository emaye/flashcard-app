import React from 'react';
import './index.css';

function FlashCard({ card, flipped, onFlip }) {
  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={onFlip}>
      <div className="front">
        <p>{card.question}</p>
      </div>
      <div className="back">
        <p>{card.answer}</p>
      </div>
    </div>
  );
}

export default FlashCard;
