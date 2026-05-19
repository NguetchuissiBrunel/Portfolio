import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Blog from './pages/Blog';
import CharacterGuide from './components/CharacterGuide';
import CustomCursor from './components/CustomCursor';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="layout-container">
      <CustomCursor />
      <CharacterGuide activeTab={activeTab} />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <Header title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
        <div className="content-wrapper">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
