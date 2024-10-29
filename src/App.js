import React, { useState } from 'react';
import FlashCard from './FlashCard';
import ProgressBar from './ProgressBar';
import './index.css';

// Pre-defined flashcards
const flashcards = [
  { question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
  { question: 'What is a component in React?', answer: 'Reusable pieces of UI.' },
  { question: 'What is state in React?', answer: 'A way to store data within a component.' },
  { question: 'What are props in React?', answer: 'Data passed to components from their parent.' },
  { question: 'What is the virtual DOM?', answer: 'A lightweight copy of the real DOM.' },
];

function App() {
  const [currentCard, setCurrentCard] = useState(0); // Track the current flashcard index
  const [flipped, setFlipped] = useState(false); // Track if the card is flipped

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length); // Loop back to the start
    setFlipped(false); // Reset flip state
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length); // Handle previous card
    setFlipped(false); // Reset flip state
  };

  return (
    <div className="app">
      <h1>JavaScript Flashcards</h1>
      <ProgressBar current={currentCard} total={flashcards.length} />
      <FlashCard
        card={flashcards[currentCard]}
        flipped={flipped}
        onFlip={() => setFlipped(!flipped)}
      />
      <div className="controls">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}

export default App;
