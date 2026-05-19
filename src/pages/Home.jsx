import { Terminal, Mail, ChevronRight } from 'lucide-react';
import CharacterGuide from '../components/CharacterGuide';
import './Home.css';

function Home() {
  const timelineQuests = [
    {
      title: "QUEST 1 // HIGHER EDUCATION - ENGINEERING",
      organization: "ENSPY (École Nationale Supérieure Polytechnique de Yaoundé)",
      date: "2022 - PRESENT",
      status: "ACTIVE",
      desc: "Specializing in Fullstack Software Engineering and Artificial Intelligence at one of Central Africa's most prestigious science colleges.",
      rewards: ["Java / Spring Boot", "AI Algorithms", "Software Architecture"]
    },
    {
      title: "QUEST 2 // REMOTE ENGINEERING INTERNSHIP",
      organization: "Codeveda Technologie (Remote)",
      date: "Mars 2026 - Avril 2026",
      status: "COMPLETED",
      desc: "Successfully completed a professional remote software engineering internship, developing dynamic components, and contributing to active corporate mainframes.",
      rewards: ["Remote Collaboration", "Software Testing", "Enterprise Tech"]
    },
    {
      title: "QUEST 3 // ACADEMIC EXCELLENCE AWARD",
      organization: "ENSPY",
      date: "2024, 2025",
      status: "COMPLETED",
      desc: "Awarded the highly selective Prix d'Excellence Académique for demonstrating exceptional academic metrics and top-tier engineering grades.",
      rewards: ["Academic Distinction", "Elite Performance"]
    },
    {
      title: "QUEST 4 // BACCALAURÉAT SÉRIE C",
      organization: "Lycée Bilingue de Mbankomo",
      date: "2022",
      status: "COMPLETED",
      desc: "Obtained scientific Baccalauréat C (Mathematics & Physics) with excellent analytical grades, building a strong logical foundation for engineering.",
      rewards: ["Advanced Mathematics", "Physics", "Analytical Logic"]
    }
  ];

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
            <button className="gx-button secondary" onClick={() => window.open('https://www.linkedin.com/in/brunel-landry-nguetchuissi-tchugoua-64a905293/', '_blank')}>
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px', display: 'inline-block', verticalAlign: 'middle' }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg> LinkedIn Core
            </button>
            <button className="gx-button secondary" onClick={() => window.open('mailto:landrybrunle5@gmail.com', '_blank')}>
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
          <CharacterGuide activeTab="home" isEmbed={true} />
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

      {/* QUEST LOG TIMELINE SECTION */}
      <div className="quest-log-section">
        <h2 className="section-title">
          <ChevronRight size={20} className="gx-text-accent inline-arrow" /> QUEST LOG // SYSTEM TIMELINE
        </h2>
        
        <div className="timeline-container">
          <div className="timeline-bar"></div>
          <div className="timeline-grid">
            {timelineQuests.map((quest, index) => (
              <div 
                key={index} 
                className={`gx-card quest-card ${quest.status === 'ACTIVE' ? 'active-quest' : 'completed-quest'}`}
              >
                {/* Neon scanner animation for active quest */}
                {quest.status === 'ACTIVE' && <div className="quest-scanner"></div>}
                
                <div className="quest-header">
                  <span className={`quest-status-badge ${quest.status.toLowerCase()}`}>
                    {quest.status}
                  </span>
                  <span className="quest-date">{quest.date}</span>
                </div>
                
                <h3 className="quest-title">{quest.title}</h3>
                <h4 className="quest-org">{quest.organization}</h4>
                <p className="quest-desc">{quest.desc}</p>
                
                <div className="quest-rewards">
                  <span className="reward-label">REWARDS ACQUIRED:</span>
                  <div className="reward-badges">
                    {quest.rewards.map((reward, ridx) => (
                      <span key={ridx} className="reward-badge">{reward}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
