import { LayoutGrid } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import './Header.css';

function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="gx-header">
      <div className="header-left">
        <div className="tab active-tab">
          <LayoutGrid size={38} className="tab-icon" />
          <span className="tab-title">{t('header.portfolio')}</span>
        </div>
      </div>
      <div className="header-right">
        <div className="language-switcher">
          <button 
            className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
            onClick={() => setLanguage('fr')}
          >
            FR
          </button>
          <div className="switcher-separator">|</div>
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
