import { useState } from 'react';
import { Mail, Terminal, Download, Briefcase, Send, CheckCircle } from 'lucide-react';
import './Blog.css';
import cvPdf from '../assets/CV_compressed (1).pdf';

function Blog() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate high-end cyberpunk transmission time
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const services = [
    {
      title: "Fullstack Web Development",
      desc: "Building high-performance, premium web applications using modern stacks (React, Node.js, Next.js).",
      badge: "WEB"
    },
    {
      title: "Mobile App Architectures",
      desc: "Developing native-quality cross-platform mobile apps for iOS and Android using React Native.",
      badge: "MOBILE"
    },
    {
      title: "AI & Data Solutions",
      desc: "Crafting intelligent pipelines, data processing models, and AI integrations using Python & ML libraries.",
      badge: "AI/DATA"
    }
  ];

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="section-title">SYSTEM // COMMUNICATIONS HUB</h2>
      </div>

      <div className="contact-grid">
        {/* Left Column: Services & Live Metrics */}
        <div className="contact-left-col">
          <div className="gx-card status-card-panel">
            <h3 className="panel-title"><Briefcase size={16} className="gx-text-accent" /> METRIC METADATA</h3>
            <div className="status-grid">
              <div className="status-item">
                <span className="status-label">AVAILABILITY</span>
                <span className="status-value active-pulse">AVAILABLE FOR WORK</span>
              </div>
              <div className="status-item">
                <span className="status-label">LOCATION</span>
                <span className="status-value">Yaoundé, Cameroon</span>
              </div>
              <div className="status-item">
                <span className="status-label">PREFERENCE</span>
                <span className="status-value">Remote & On-site</span>
              </div>
            </div>

            <div className="cv-download-section">
              <a 
                href={cvPdf}
                download="CV_Nguetchuissi_Brunel.pdf"
                className="gx-button primary cv-btn"
              >
                <Download size={16} /> DOWNLOAD CURRICULUM VITAE
              </a>
            </div>
          </div>

          <div className="services-panel">
            <h3 className="panel-title"><Terminal size={16} className="gx-text-accent" /> CAPABILITIES & SERVICES</h3>
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
            <h3 className="panel-title"><Mail size={16} className="gx-text-accent" /> SECURE TRANSMISSION CHANNEL</h3>
            <p className="form-intro">
              Initialize connection protocols. Fill out the fields below to transmit your message packet directly to the administrator console.
            </p>

            {status === 'success' ? (
              <div className="transmission-success">
                <CheckCircle size={48} className="success-icon" />
                <h4>TRANSMISSION SUCCESSFUL</h4>
                <p>Connection established. Message packet successfully uploaded to NLB databanks. Response incoming within 24 cycles.</p>
                <button className="gx-button secondary" onClick={() => setStatus(null)}>
                  TRANSMIT NEW PACKET
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cyber-form">
                <div className="form-group">
                  <label htmlFor="name">SENDER IDENTIFICATION</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name / entity"
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">RETURN PROTOCOL EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your return email address"
                    disabled={status === 'sending'}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">PACKET DATA MESSAGE</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your transmission payload here..."
                    disabled={status === 'sending'}
                  />
                </div>

                <button 
                  type="submit" 
                  className="gx-button primary submit-btn" 
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>TRANSMITTING PACKET...</>
                  ) : (
                    <>
                      <Send size={16} /> TRANSMIT MESSAGE
                    </>
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
