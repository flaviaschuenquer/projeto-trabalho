import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="main-header">
    
    <Link to="/">

    <div className="logo-text">
      <span className="logo-text-1">Seu canal</span>
      <span className="logo-text-2"> de notícias</span>
    
    </div>
    </Link>

  </header>
);

export default Header;