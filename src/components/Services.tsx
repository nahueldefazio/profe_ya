import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '📐',
      title: 'Matemáticas',
      description: 'Álgebra, geometría, cálculo, estadística y más. Desde nivel básico hasta universitario.',
      subjects: ['Álgebra', 'Geometría', 'Cálculo', 'Estadística']
    },
    {
      icon: '⚡',
      title: 'Física',
      description: 'Mecánica, termodinámica, electromagnetismo y física moderna con ejemplos prácticos.',
      subjects: ['Mecánica', 'Termodinámica', 'Electromagnetismo', 'Óptica']
    },
    {
      icon: '🧪',
      title: 'Química',
      description: 'Química general, orgánica, inorgánica y química analítica con laboratorios virtuales.',
      subjects: ['Química General', 'Orgánica', 'Inorgánica', 'Analítica']
    },
    {
      icon: '💻',
      title: 'Programación',
      description: 'Python, JavaScript, Java y más. Desde conceptos básicos hasta proyectos avanzados.',
      subjects: ['Python', 'JavaScript', 'Java', 'C++']
    },
    {
      icon: '📊',
      title: 'Estadística',
      description: 'Análisis estadístico, probabilidad, inferencia y software especializado.',
      subjects: ['Probabilidad', 'Inferencia', 'Análisis', 'Software']
    },
    {
      icon: '🎯',
      title: 'Preparación Exámenes',
      description: 'Preparación específica para exámenes de admisión, SAT, GRE y certificaciones.',
      subjects: ['SAT', 'GRE', 'Admisión', 'Certificaciones']
    }
  ];

  return (
    <section id="servicios" className="services section">
      <div className="container">
        <h2 className="section-title">Mis Servicios</h2>
        <p className="section-subtitle">
          Clases especializadas diseñadas para maximizar tu aprendizaje y alcanzar tus objetivos académicos
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-up">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-subjects">
                {service.subjects.map((subject, subIndex) => (
                  <span key={subIndex} className="subject-tag">
                    {subject}
                  </span>
                ))}
              </div>
              
              <div className="service-features">
                <div className="feature">
                  <span className="feature-icon">✅</span>
                  <span>Clases personalizadas</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📚</span>
                  <span>Material incluido</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔄</span>
                  <span>Repaso ilimitado</span>
                </div>
              </div>
              
              <a href="#contacto" className="service-cta">
                Consultar Precio
              </a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>¿No encuentras tu materia?</h3>
          <p>Contacta conmigo y hablemos sobre tus necesidades específicas</p>
          <a href="#contacto" className="btn btn-primary">
            Consulta Personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
