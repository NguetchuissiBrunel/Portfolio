import { LayoutGrid } from 'lucide-react';
import './Header.css';

function Header({ title }) {
  return (
    <header className="gx-header">
      <div className="header-left">
        <div className="tab active-tab">
          <LayoutGrid size={38} className="tab-icon" />
          <span className="tab-title">PORTFOLIO</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
