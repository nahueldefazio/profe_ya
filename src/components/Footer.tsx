import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/15551234567'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:carlos@profesorya.com'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', url: '#inicio' },
    { name: 'Servicios', url: '#servicios' },
    { name: 'Sobre Mí', url: '#sobre-mi' },
    { name: 'Contacto', url: '#contacto' }
  ];

  const services = [
    { name: 'Matemáticas', url: '#servicios' },
    { name: 'Física', url: '#servicios' },
    { name: 'Química', url: '#servicios' },
    { name: 'Programación', url: '#servicios' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>ProfesorYa</h3>
              <p>
                Transformando vidas a través de la educación personalizada. 
                Tu éxito académico es mi compromiso.
              </p>
            </div>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.url}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>carlos@profesorya.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} ProfesorYa. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Política de Privacidad</a>
              <a href="#terms">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
