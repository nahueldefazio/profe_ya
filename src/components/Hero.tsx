import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Aprende con el Mejor
              <span className="highlight"> Profesor Particular</span>
            </h1>
            
            <p className="hero-description fade-in-up">
              Clases personalizadas, metodología adaptada a tu ritmo y resultados garantizados. 
              Transforma tu aprendizaje con un enfoque único y profesional.
            </p>
            
            <div className="hero-stats fade-in-up">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Estudiantes</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Éxito</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Años</span>
              </div>
            </div>
            
            <div className="hero-buttons fade-in-up">
              <a href="#contacto" className="btn btn-primary">
                Contactar Ahora
              </a>
              <a href="#servicios" className="btn btn-secondary">
                Ver Servicios
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-card">
              <div className="card-header">
                <div className="card-avatar">
                  <div className="avatar-placeholder">👨‍🏫</div>
                </div>
                <div className="card-info">
                  <h3>Prof. Carlos Mendoza</h3>
                  <p>Especialista en Matemáticas y Física</p>
                </div>
              </div>
              
              <div className="card-content">
                <div className="feature">
                  <span className="feature-icon">📚</span>
                  <span>Clases 1 a 1</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💻</span>
                  <span>Online y Presencial</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎯</span>
                  <span>Resultados Garantizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
