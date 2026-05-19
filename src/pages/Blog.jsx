import { useState } from 'react';
import { Mail, Terminal, Download, Briefcase, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../components/LanguageContext';
import './Blog.css';
import cvPdf from '../assets/CV_compressed (1).pdf';

function Blog() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const services = t('blog.services');

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="section-title">{t('blog.title')}</h2>
      </div>

      <div className="contact-grid">
        {/* Left Column: Services & Live Metrics */}
        <div className="contact-left-col">
          <div className="gx-card status-card-panel">
            <h3 className="panel-title"><Briefcase size={16} className="gx-text-accent" /> {t('blog.metadata')}</h3>
            <div className="status-grid">
              <div className="status-item">
                <span className="status-label">{t('blog.availability')}</span>
                <span className="status-value active-pulse">{t('blog.availValue')}</span>
              </div>
              <div className="status-item">
                <span className="status-label">{t('blog.location')}</span>
                <span className="status-value">{t('blog.locValue')}</span>
              </div>
              <div className="status-item">
                <span className="status-label">{t('blog.preference')}</span>
                <span className="status-value">{t('blog.prefValue')}</span>
              </div>
            </div>

            <div className="cv-download-section">
              <a
                href={cvPdf}
                download="CV_Nguetchuissi_Brunel.pdf"
                className="gx-button primary cv-btn"
              >
                <Download size={16} /> {t('blog.cvBtn')}
              </a>
            </div>
          </div>

          <div className="services-panel">
            <h3 className="panel-title"><Terminal size={16} className="gx-text-accent" /> {t('blog.servicesTitle')}</h3>
            <div className="services-list">
              {services.map((srv, idx) => (
                <div key={idx} className="gx-card service-item-card">
                  <div className="service-header">
                    <span className="service-tag">{srv.badge}</span>
                    <h4>{srv.title}</h4>
                  </div>
                  <p>{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Secure Cyber Contact Form */}
        <div className="contact-right-col">
          <div className="gx-card form-panel">
            <h3 className="panel-title"><Mail size={16} className="gx-text-accent" /> {t('blog.formTitle')}</h3>
            <p className="form-intro">{t('blog.formIntro')}</p>

            {status === 'success' ? (
              <div className="transmission-success">
                <CheckCircle size={48} className="success-icon" />
                <h4>{t('blog.successTitle')}</h4>
                <p>{t('blog.successDesc')}</p>
                <button className="gx-button secondary" onClick={() => setStatus(null)}>
                  {t('blog.successBtn')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cyber-form">
                <div className="form-group">
                  <label htmlFor="name">{t('blog.labelSender')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('blog.placeholderSender')}
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('blog.labelEmail')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('blog.placeholderEmail')}
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('blog.labelMessage')}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('blog.placeholderMessage')}
                    disabled={status === 'sending'}
                  />
                </div>

                <button
                  type="submit"
                  className="gx-button primary submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>{t('blog.btnTransmitting')}</>
                  ) : (
                    <><Send size={16} /> {t('blog.btnTransmit')}</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
