import './Resume.css';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';
import type { TimelineEntry } from '../../i18n/translations';

const Timeline = ({ entries }: { entries: TimelineEntry[] }) => (
    <div className="timeline-list">
        {entries.map((entry) => (
            <div className="timeline-data" key={`${entry.subtitle}-${entry.date}`}>
                <div>
                    <h3 className="timeline-data-title">{entry.title}</h3>
                    <span className="timeline-data-subtitle">{entry.subtitle}</span>
                    <div className="timeline-date">
                        <FaCalendarAlt className="timeline-date-icon" />
                        <span>{entry.date}</span>
                    </div>
                    {entry.description && (
                        <p className="timeline-description">{entry.description}</p>
                    )}
                </div>
            </div>
        ))}
    </div>
);

export const Resume = () => {
    const { t } = useLanguage();

    return (
        <section className="resume section container" id="resume">
            <h2 className="section_title">{t.resume.title}</h2>

            <div className="resume-container grid">
                <div className="resume-card">
                    <div className="timeline-item">
                        <h3 className="timeline-title">
                            <FaGraduationCap className="timeline-icon" />
                            {t.resume.education}
                        </h3>
                        <Timeline entries={t.resume.educationEntries} />
                    </div>
                </div>

                <div className="resume-card">
                    <div className="timeline-item">
                        <h3 className="timeline-title">
                            <FaBriefcase className="timeline-icon" />
                            {t.resume.experience}
                        </h3>
                        <Timeline entries={t.resume.experienceEntries} />
                    </div>
                </div>
            </div>
        </section>
    );
};
