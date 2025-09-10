import React from 'react';
import './About.css';

const About: React.FC = () => {
  const achievements = [
    {
      icon: '🎓',
      title: 'Formación Académica',
      description: 'Licenciado en Matemáticas con especialización en Física. Máster en Educación con 5+ años de experiencia.'
    },
    {
      icon: '🏆',
      title: 'Reconocimientos',
      description: 'Profesor destacado del año 2023. Certificado en metodologías de enseñanza innovadoras.'
    },
    {
      icon: '📈',
      title: 'Resultados Comprobados',
      description: '95% de mis estudiantes mejoran sus calificaciones. 80% ingresan a universidades de prestigio.'
    },
    {
      icon: '💡',
      title: 'Metodología Única',
      description: 'Enfoque personalizado que se adapta al ritmo de cada estudiante. Uso de tecnología educativa avanzada.'
    }
  ];


  return (
    <section id="sobre-mi" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Hola, soy Carlos Mendoza</h3>
            <p className="about-intro">
              Profesor particular especializado en matemáticas, física y ciencias exactas. 
              Mi pasión es hacer que el aprendizaje sea accesible, divertido y efectivo para cada estudiante.
            </p>
            
            <p>
              Con más de 5 años de experiencia enseñando a estudiantes de todos los niveles, 
              he desarrollado una metodología única que combina explicaciones claras, 
              ejemplos prácticos y un enfoque personalizado que se adapta a las necesidades 
              específicas de cada alumno.
            </p>
            
            <div className="about-highlights">
              <div className="highlight">
                <span className="highlight-number">500+</span>
                <span className="highlight-text">Estudiantes Ayudados</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">95%</span>
                <span className="highlight-text">Tasa de Éxito</span>
              </div>
              <div className="highlight">
                <span className="highlight-number">5+</span>
                <span className="highlight-text">Años de Experiencia</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">👨‍🏫</span>
                <p>Prof. Carlos Mendoza</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="achievements">
          <h3>¿Por qué elegirme?</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card fade-in-up">
                <div className="achievement-icon">
                  <span>{achievement.icon}</span>
                </div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
