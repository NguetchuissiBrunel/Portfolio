import { Terminal, Mail, ChevronRight } from 'lucide-react';
import CharacterGuide from '../components/CharacterGuide';
import { useLanguage } from '../components/LanguageContext';
import './Home.css';

function Home() {
  const { t } = useLanguage();

  const timelineQuests = t('home.quests');

  const questDates = [
    "2022 - PRESENT",
    "Mars 2026 - Avril 2026",
    "2024, 2025",
    "2022"
  ];

  const questStatuses = ["ACTIVE", "COMPLETED", "COMPLETED", "COMPLETED"];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="gx-text-accent greeting">{t('home.greeting')}</h2>
          <h1 className="title">
            Nguetchuissi Tchugoua <br />
            <span className="highlight">{t('home.name')}</span>
          </h1>
          <p className="subtitle">
            <span className="typing-effect">{t('home.title')}</span>
          </p>
          <p className="bio">{t('home.bio')}</p>

          <div className="action-buttons">
            <button className="gx-button primary" onClick={() => window.open('https://github.com/NguetchuissiBrunel', '_blank')}>
              <Terminal size={18} /> {t('home.btnGithub')}
            </button>
            <button className="gx-button secondary" onClick={() => window.open('https://www.linkedin.com/in/brunel-landry-nguetchuissi-tchugoua-64a905293/', '_blank')}>
              <svg fill="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px', display: 'inline-block', verticalAlign: 'middle' }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg> {t('home.btnLinkedin')}
            </button>
            <button className="gx-button secondary" onClick={() => window.open('mailto:landrybrunle5@gmail.com', '_blank')}>
              <Mail size={18} /> {t('home.btnContact')}
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
          <div className="stat-label">{t('home.stats.experience')}</div>
        </div>
        <div className="gx-card stat-card">
          <div className="stat-value">50+</div>
          <div className="stat-label">{t('home.stats.completed')}</div>
        </div>
        <div className="gx-card stat-card">
          <div className="stat-value">100%</div>
          <div className="stat-label">{t('home.stats.performance')}</div>
        </div>
      </div>

      {/* QUEST LOG TIMELINE SECTION */}
      <div className="quest-log-section">
        <h2 className="section-title">
          <ChevronRight size={20} className="gx-text-accent inline-arrow" /> {t('home.questLogTitle')}
        </h2>

        <div className="timeline-container">
          <div className="timeline-bar"></div>
          <div className="timeline-grid">
            {timelineQuests.map((quest, index) => (
              <div
                key={index}
                className={`gx-card quest-card ${questStatuses[index] === 'ACTIVE' ? 'active-quest' : 'completed-quest'}`}
              >
                {questStatuses[index] === 'ACTIVE' && <div className="quest-scanner"></div>}

                <div className="quest-header">
                  <span className={`quest-status-badge ${questStatuses[index].toLowerCase()}`}>
                    {questStatuses[index]}
                  </span>
                  <span className="quest-date">{questDates[index]}</span>
                </div>

                <h3 className="quest-title">{quest.title}</h3>
                <h4 className="quest-org">{quest.org}</h4>
                <p className="quest-desc">{quest.desc}</p>

                <div className="quest-rewards">
                  <span className="reward-label">{quest.rewardLabel}</span>
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
