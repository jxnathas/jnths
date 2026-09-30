import './Home.css';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

export const Home = () => {
    const { t } = useLanguage();

    return (
        <section className="home" id='home'>
            <div className="home-container">
                <img src="https://r2.fivemanage.com/5RbEw75bBG8EXIwP4B2iA/WIN_20250312_19_17_39_Pro1.gif" alt="Jonathas Santos" className="home-img" />
                <h1 className='name'>Jonathas Santos</h1>
                <span className="home-subtitle">{t.home.subtitle}</span>
                <div className="home-socials">
                    <a href="https://linkedin.com/in/jxnathas/" target="__blank" rel="noopener noreferrer" className="home-social-link"><FaLinkedinIn /></a>
                    <a href="https://github.com/jxnathas" target="__blank" rel="noopener noreferrer" className="home-social-link"><FaGithub/></a>
                    <a href="https://www.instagram.com/_jnths/" target="__blank" rel="noopener noreferrer" className="home-social-link"><FaInstagram/></a>
                </div>
                <a href="#contact" className="btn">{t.home.cta}</a>
            </div>
        </section>
    );
};
