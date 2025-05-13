import './Resume.css';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export const Resume = () => {
    return (
        <section className="resume section container" id="resume">
            <h2 className="section_title">Resume</h2>
            
            <div className="resume-container grid">
                <div className="resume-card">
                    <div className="timeline-item">
                        <h3 className="timeline-title">
                            <FaGraduationCap className="timeline-icon" />
                            Education
                        </h3>
                        <div className="timeline-list">
                            <div className="timeline-data">
                                <div>
                                    <h3 className="timeline-data-title">Systems Analyses and Development</h3>
                                    <span className="timeline-data-subtitle">Anhanguera Educational</span>
                                    <div className="timeline-date">
                                        <FaCalendarAlt className="timeline-date-icon" />
                                        <span>2023 - 2025</span>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-data">
                                <div>
                                    <h3 className="timeline-data-title">Cloud Computing</h3>
                                    <span className="timeline-data-subtitle">CEPEDI</span>
                                    <div className="timeline-date">
                                        <FaCalendarAlt className="timeline-date-icon" />
                                        <span>Jun/2023 - Dez/2023</span>
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-data">
                                <div>
                                    <h3 className="timeline-data-title">Computer Engineering</h3>
                                    <span className="timeline-data-subtitle">State University of Feira de Santana</span>
                                    <div className="timeline-date">
                                        <FaCalendarAlt className="timeline-date-icon" />
                                        <span>2015 - Interrupted</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="timeline-data">
                                <div>
                                    <h3 className="timeline-data-title">Full Stack Development</h3>
                                    <span className="timeline-data-subtitle">Udemy Courses</span>
                                    <div className="timeline-date">
                                        <FaCalendarAlt className="timeline-date-icon" />
                                        <span>2020 - Present</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="resume-card">
                    <div className="timeline-item">
                        <h3 className="timeline-title">
                            <FaBriefcase className="timeline-icon" />
                            Experience
                        </h3>
                        <div className="timeline-list">
                            <div className="timeline-data">
                                <div>
                                    <h3 className="timeline-data-title">Software Engineer</h3>
                                    <span className="timeline-data-subtitle">MB Labs</span>
                                    <div className="timeline-date">
                                        <FaCalendarAlt className="timeline-date-icon" />
                                        <span>2025 - Present</span>
                                    </div>
                                    <p className="timeline-description">
                                        Developing web applications using React, TypeScript, and Node.js. 
                                        Working with cloud services and implementing DevOps practices.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="timeline-data">
                                <div>
                                    <h3 className="timeline-data-title">Software Engineer</h3>
                                    <span className="timeline-data-subtitle">Castelo Branco Business Solutions</span>
                                    <div className="timeline-date">
                                        <FaCalendarAlt className="timeline-date-icon" />
                                        <span>2022 - 2024</span>
                                    </div>
                                    <p className="timeline-description">
                                        Created responsive websites and web applications for various clients. 
                                        Specialized in React, JavaScript, and modern CSS frameworks.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-data">
                                <div>
                                    <h3 className="timeline-data-title">Software Developer</h3>
                                    <span className="timeline-data-subtitle"> UrbanMob APP</span>
                                    <div className="timeline-date">
                                        <FaCalendarAlt className="timeline-date-icon" />
                                        <span>2020 - 2021</span>
                                    </div>
                                    <p className="timeline-description">
                                        Started my professional journey learning web development fundamentals. 
                                        Worked on HTML, CSS, JavaScript, and basic React projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};