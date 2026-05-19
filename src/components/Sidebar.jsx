import { Home, FolderGit2, Cpu, Mail } from 'lucide-react';
import './Sidebar.css';

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' },
    { id: 'skills', icon: Cpu, label: 'Skills' },
    { id: 'blog', icon: Mail, label: 'Contact' },
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
            return (
              <li key={item.id}>
                <button
                  className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                  title={item.label}
                >
                  <Icon size={24} strokeWidth={1.5} />
                  <span className="tooltip">{item.label}</span>
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
