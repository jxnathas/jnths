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
                    {t.about.story.map((block, index) => {
                        switch (block.type) {
                            case 'lead':
                                return <p key={index} className="about-lead">{renderText(block.text)}</p>;
                            case 'highlight':
                                return (
                                    <p
                                        key={index}
                                        className={`about-highlight ${block.italic ? 'about-italic' : ''}`}
                                    >
                                        {renderText(block.text)}
                                    </p>
                                );
                            case 'quote':
                                return <blockquote key={index} className="about-quote">{block.text}</blockquote>;
                            case 'stack':
                                return <p key={index} className="about-stack">{renderText(block.text)}</p>;
                            case 'closing':
                                return <p key={index} className="about-closing">{renderText(block.text)}</p>;
                            default:
                                return <p key={index}>{renderText(block.text)}</p>;
                        }
                    })}

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
