import { Home, FolderGit2, Cpu, Mail } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import './Sidebar.css';

function Sidebar({ activeTab, setActiveTab }) {
  const { t } = useLanguage();

  const menuItems = [
    { id: 'home', icon: Home, labelKey: 'sidebar.home' },
    { id: 'projects', icon: FolderGit2, labelKey: 'sidebar.projects' },
    { id: 'skills', icon: Cpu, labelKey: 'sidebar.skills' },
    { id: 'blog', icon: Mail, labelKey: 'sidebar.blog' },
  ];

  return (
    <aside className="gx-sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">
          <span>NLB</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const label = t(item.labelKey);
            return (
              <li key={item.id}>
                <button
                  className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                  title={label}
                >
                  <Icon size={24} strokeWidth={1.5} />
                  <span className="tooltip">{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
