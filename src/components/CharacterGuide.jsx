import React, { useState, useEffect } from 'react';
import './CharacterGuide.css';
import characterImg from '../assets/manga_guide-removebg-preview.png';

function CharacterGuide({ activeTab }) {
  const [positionClass, setPositionClass] = useState('pos-home');

  useEffect(() => {
    // Map tabs to specific position classes
    const tabPositions = {
      'home': 'pos-home',
      'projects': 'pos-projects',
      'skills': 'pos-skills',
      'blog': 'pos-blog'
    };
    
    if (tabPositions[activeTab]) {
      setPositionClass(tabPositions[activeTab]);
    }
  }, [activeTab]);

  return (
    <div className={`character-guide-container ${positionClass}`}>
      <img 
        src={characterImg} 
        alt="Manga Guide Character" 
        className="character-guide-img"
      />
      <div className="hologram-base"></div>
    </div>
  );
}

export default CharacterGuide;
