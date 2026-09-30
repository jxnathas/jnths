import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Contact = () => {
    const { t } = useLanguage();

    return (
        <section className="contact section container" id="contact">
            <h2 className="section_title">{t.contact.title}</h2>

            <div className="contact-container">
                <div className="contact-card">
                    <div className="contact-content grid">
                        <div className="contact-info">
                            <h3 className="contact-title">{t.contact.subtitle}</h3>
                            <p className="contact-description">{t.contact.description}</p>

                            <div className="contact-details">
                                <div className="contact-detail">
                                    <FaEnvelope className="contact-icon" />
                                    <div>
                                        <h4>{t.contact.email}</h4>
                                        <span>jnths.dev@gmail.com</span>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <div>
                                        <h4>{t.contact.location}</h4>
                                        <span>{t.contact.locationValue}</span>
                                    </div>
                                </div>

                                <div className="contact-detail">
                                    <FaPhone className="contact-icon" />
                                    <div>
                                        <h4>{t.contact.phone}</h4>
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

                        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                            <div className="contact-form-group">
                                <label htmlFor="name" className="contact-form-label">{t.contact.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="contact-form-input"
                                    placeholder={t.contact.namePlaceholder}
                                    required
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="email" className="contact-form-label">{t.contact.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="contact-form-input"
                                    placeholder={t.contact.emailPlaceholder}
                                    required
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="subject" className="contact-form-label">{t.contact.subject}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="contact-form-input"
                                    placeholder={t.contact.subjectPlaceholder}
                                    required
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="message" className="contact-form-label">{t.contact.message}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="contact-form-textarea"
                                    placeholder={t.contact.messagePlaceholder}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn contact-form-button">
                                {t.contact.send}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
