import './About.css';
import { Fragment } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const renderText = (text: string) =>
    text.split('**').map((chunk, index) =>
        index % 2 === 1 ? <strong key={index}>{chunk}</strong> : <Fragment key={index}>{chunk}</Fragment>
    );

export const About = () => {
    const { t } = useLanguage();

    return (
        <section className="about section container" id='about'>
            <h2 className="section_title">{t.about.title}</h2>

            <div className="about-container">
                <img src="https://avatars.githubusercontent.com/u/44008790?v=4" alt="Jonathas Santos" className="about-img" />

                <div className='about-data'>
                    {t.about.story.map((block, index) => (
                        <p key={index} className="about-paragraph">{renderText(block)}</p>
                    ))}

                    <a
                        href="https://drive.google.com/file/d/1dBfRqmoUPh7WlkG8z286XmeNLaZIiTGN/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn about-btn"
                    >
                        {t.about.downloadCv}
                    </a>
                </div>
            </div>
        </section>
    );
}
