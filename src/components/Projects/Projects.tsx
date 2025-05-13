import './Projects.css';
import { projectsData } from './ProjectsData';
import { FaGithub, FaExternalLinkAlt, FaCode, FaFilter } from 'react-icons/fa';
import { useState } from 'react';

export const Projects = () => {
    const [filter, setFilter] = useState('all');
    
    const categories = [
        { key: 'all', label: 'All' },
        { key: 'frontend', label: 'Frontend' },
        { key: 'backend', label: 'Backend' },
        { key: 'fullstack', label: 'Full Stack' },
        { key: 'mobile', label: 'Mobile' }
    ];
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);
    
    return (
        <section className="projects section container" id="projects">
            <h2 className="section_title">My Projects</h2>
            <p className="section_subtitle">Check out some of my recent work</p>
            
            <div className="projects-filters">
                <FaFilter className="filter-icon" />
                {categories.map(category => (
                    <button
                        key={category.key}
                        className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                        onClick={() => setFilter(category.key)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>
            
            <div className="projects-container grid">
                {filteredProjects.map(project => (
                    <article key={project.id} className="project-card">
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <div className="project-links">
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        title="View Code"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt />
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-technologies">
                                <FaCode className="tech-icon" />
                                <div className="tech-list">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
            {filteredProjects.length === 0 && (
                <div className="no-projects">
                    <p>No projects found in this category.</p>
                </div>
            )}
        </section>
    );
};