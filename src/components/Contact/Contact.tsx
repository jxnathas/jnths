import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
    return (
        <section className="contact section container" id="contact">
            <h2 className="section_title">Contact Me</h2>
            
            <div className="contact-container">
                <div className="contact-card">
                    <div className="contact-content grid">
                        <div className="contact-info">
                            <h3 className="contact-title">Get in Touch</h3>
                            <p className="contact-description">
                                I'm always open to discussing new opportunities, interesting projects, 
                                or just having a friendly chat about technology and development.
                            </p>
                            
                            <div className="contact-details">
                        <div className="contact-detail">
                            <FaEnvelope className="contact-icon" />
                            <div>
                                <h4>Email</h4>
                                <span>jnths.dev@gmail.com</span>
                            </div>
                        </div>
                        
                        <div className="contact-detail">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <h4>Location</h4>
                                <span>Bahia, Brazil</span>
                            </div>
                        </div>
                        
                        <div className="contact-detail">
                            <FaPhone className="contact-icon" />
                            <div>
                                <h4>Phone</h4>
                                <span>+55 (75) 99884-2066</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-socials">
                        <a href="https://linkedin.com/in/jxnathas/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/jxnathas" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/_jnths/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <FaInstagram />
                        </a>
                    </div>
                        </div>
                        
                        <form className="contact-form">
                    <div className="contact-form-group">
                        <label htmlFor="name" className="contact-form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="contact-form-input"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    
                    <div className="contact-form-group">
                        <label htmlFor="email" className="contact-form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="contact-form-input"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    
                    <div className="contact-form-group">
                        <label htmlFor="subject" className="contact-form-label">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="contact-form-input"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    
                    <div className="contact-form-group">
                        <label htmlFor="message" className="contact-form-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="contact-form-textarea"
                            placeholder="Your message"
                            required
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="btn contact-form-button">
                        Send Message
                    </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};