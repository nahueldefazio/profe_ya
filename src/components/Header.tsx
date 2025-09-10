import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <h2>ProfesorYa</h2>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#servicios" className="nav-link">Servicios</a>
            <a href="#sobre-mi" className="nav-link">Sobre Mí</a>
            <a href="#contacto" className="nav-link">Contacto</a>
            <a href="#contacto" className="btn btn-primary nav-cta">WhatsApp</a>
          </div>
          
          <div className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
