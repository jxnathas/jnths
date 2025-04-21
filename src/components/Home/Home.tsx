import './Home.css';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
    return (
        <section className="home" id='home'>
            <div className="home-container">
                <img src="https://avatars.githubusercontent.com/u/44008790?v=4" alt="img" className="home-img" />
                <h1 className='name'>Jonathas Santos</h1>
                <span className="home-subtitle">Software Engineer</span>
                <div className="home-socials">
                    <a href="linkedin.com/in/jxnathas/" target="_blank" rel="noopener noreferrer" className="home-social-link"><FaLinkedinIn /></a>
                    <a href="github.com/jxnathas" target="_blank" rel="noopener noreferrer" className="home-social-link"><FaGithub/></a>
                    <a href="https://www.instagram.com/_jnths/" target="_blank" rel="noopener noreferrer" className="home-social-link"><FaInstagram/></a>
                </div>
                <a href="#contact" className="btn">Talk with me!</a>
            </div>
        </section>
    );
};

export default Home;