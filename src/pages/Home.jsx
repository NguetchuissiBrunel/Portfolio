import { Terminal, Link, Mail, ChevronRight } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="gx-text-accent greeting">SYSTEM INITIALIZED //</h2>
          <h1 className="title">
            Nguetchuissi Tchugoua <br />
            <span className="highlight">Brunel Landry</span>
          </h1>
          <p className="subtitle">
            <span className="typing-effect">Fullstack Web & Mobile Developer</span>
          </p>
          <p className="bio">
            Passionate about Data and Artificial Intelligence. Building robust, scalable, and premium digital experiences.
          </p>
          
          <div className="action-buttons">
            <button className="gx-button primary" onClick={() => window.open('https://github.com/NguetchuissiBrunel', '_blank')}>
              <Terminal size={18} /> Initialize GitHub
            </button>
            <button className="gx-button secondary" onClick={() => window.open('mailto:brunel.landry@example.com', '_blank')}>
              <Mail size={18} /> Contact Protocol
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="cyber-circle">
            <div className="inner-circle"></div>
            <div className="core"></div>
            <div className="scanner"></div>
          </div>
        </div>
      </div>

      <div className="quick-stats">
        <div className="gx-card stat-card">
          <div className="stat-value">5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="gx-card stat-card">
          <div className="stat-value">50+</div>
          <div className="stat-label">Projects Completed</div>
        </div>
        <div className="gx-card stat-card">
          <div className="stat-value">100%</div>
          <div className="stat-label">System Performance</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
