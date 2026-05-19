import { useEffect, useState } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchActive, setIsTouchActive] = useState(false);

  useEffect(() => {
    // Check if device runs a coarse pointer (mobile/tablet touch screens) or small dimensions
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches || 
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      setIsTouchActive(false);
      document.documentElement.classList.remove('touch-active');
    };

    const onTouchStart = () => {
      setIsTouchActive(true);
      document.documentElement.classList.add('touch-active');
    };

    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    // Track dynamic mouse over to capture any clickable element hover
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') ||
        target.closest('a') ||
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' ||
        target.className?.includes?.('gx-button') ||
        target.className?.includes?.('nav-button') ||
        target.className?.includes?.('skill-item') ||
        target.className?.includes?.('project-card') ||
        target.className?.includes?.('pagination-btn') ||
        target.className?.includes?.('pagination-number') ||
        target.style?.cursor === 'pointer';

      setHovered(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.classList.remove('touch-active');
    };
  }, []);

  if (isMobile || isTouchActive || hidden) return null;

  return (
    <div 
      className={`custom-cursor-dot ${hovered ? 'hovered' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="gaming-pointer-svg"
      >
        <path 
          d="M2 2L20 8L12 12L8 20Z" 
          fill="var(--accent-color)" 
          stroke="#fff" 
          strokeWidth="1.5" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
}

export default CustomCursor;
