import { Terminal, Mail, ChevronRight } from 'lucide-react';
import './Home.css';

function Home() {
  const timelineQuests = [
    {
      title: "QUEST 1 // MASTER IN DATA SCIENCE & AI",
      organization: "Université de Yaoundé I",
      date: "2024 - 2026",
      status: "COMPLETED",
      desc: "Deep specialization in Machine Learning algorithms, Big Data pipelines, Neural Network modeling, and Advanced Academic Research in Artificial Intelligence.",
      rewards: ["PyTorch", "Python", "Data Science", "TensorFlow"]
    },
    {
      title: "QUEST 2 // FULLSTACK & MOBILE ARCHITECT",
      organization: "Enterprise & Freelance Solutions",
      date: "2022 - PRESENT",
      status: "ACTIVE",
      desc: "Leading development of premium web and native mobile clients. Architecting reliable backend infrastructures and optimizing database schemas for high-speed performance.",
      rewards: ["React Native", "Spring Boot", "Next.js", "PostgreSQL"]
    },
    {
      title: "QUEST 3 // CLOUD AUTOMATION & DEVOP MAIN ENGINE",
      organization: "Personal Lab & Open Source",
      date: "2021 - PRESENT",
      status: "ACTIVE",
      desc: "Building CI/CD deployment pipelines, containerizing applications with Docker, scripting automation processes, and maintaining secure cloud instances.",
      rewards: ["Docker", "Git/GitHub", "Linux", "AWS"]
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
