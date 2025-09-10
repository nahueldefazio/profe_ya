import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      info: 'carlos@profesorya.com',
      link: 'mailto:carlos@profesorya.com'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      info: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      info: 'Ciudad de México, México',
      link: '#'
    },
    {
      icon: '⏰',
      title: 'Horarios',
      info: 'Lun - Vie: 9:00 - 20:00',
      link: '#'
    }
  ];


  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Listo para comenzar tu aprendizaje? Contáctame para una consulta gratuita
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="contact-cards">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.link} className="contact-card">
                  <div className="contact-icon">
                    <span>{item.icon}</span>
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Envíame un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Tu teléfono (opcional)"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona una materia</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="fisica">Física</option>
                    <option value="quimica">Química</option>
                    <option value="programacion">Programación</option>
                    <option value="estadistica">Estadística</option>
                    <option value="preparacion">Preparación Exámenes</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Cuéntame sobre tus objetivos y necesidades..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary form-submit ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-success">
                  ¡Mensaje enviado correctamente! Te contactaré pronto.
                </div>
              )}
            </form>
            
            <div className="contact-note">
              <p>💡 <strong>Clase de prueba gratuita:</strong> Primera clase de 30 minutos sin costo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
