import React, { useState, useEffect, useRef } from 'react';
import './CharacterGuide.css';
import characterImg from '../assets/manga_guide-removebg-preview.png';

function CharacterGuide({ activeTab, isEmbed = false }) {
  const [positionClass, setPositionClass] = useState('pos-home');
  const [showBubble, setShowBubble] = useState(true);
  const [bubbleText, setBubbleText] = useState('');
  const timerRef = useRef(null);

  // If this is the global guide on the Home page, hide it so the embedded guide in Home.jsx can render instead!
  if (activeTab === 'home' && !isEmbed) {
    return null;
  }

  const dialogTexts = {
    'home': "SYSTEM INTRUSION DETECTED... Just kidding! Welcome to Brunel Landry's database console. Click me if you need navigation assistance.",
    'projects': "Accessing active repository logs... Browse my featured spotlights below, or search standard modules directly from my GitHub mainframe.",
    'skills': "Scanning capability matrix... Frontend engines, Backend frameworks, and AI systems are operating at peak efficiency.",
    'blog': "Secure communications link ready... Initialize your contact packets and transmit them directly to my administrator console."
  };

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

    // Set dialog text and show bubble
    if (dialogTexts[activeTab]) {
      setBubbleText(dialogTexts[activeTab]);
      setShowBubble(true);

      // Reset any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Automatically hide bubble after 5 seconds to prevent layout blocking
      timerRef.current = setTimeout(() => {
        setShowBubble(false);
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeTab]);

  return (
    <div className={isEmbed ? `embedded-guide` : `character-guide-container ${positionClass}`}>
      <div className={`speech-bubble ${showBubble ? 'visible' : ''}`}>
        <p>{bubbleText}</p>
        <span className="bubble-arrow"></span>
      </div>
      
      <img 
        src={characterImg} 
        alt="Manga Guide Character" 
        className="character-guide-img"
        onClick={() => setShowBubble(!showBubble)}
        title="Toggle Dialog Bubble"
      />
      <div className="hologram-base"></div>
    </div>
  );
}

export default CharacterGuide;
