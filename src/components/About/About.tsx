import './About.css';

export const About = () => {
    return (
        <section className="about section container" id='about'>
            <h2 className="section_title">About Me</h2>
            <div className="about-container grid">
                <img src="https://avatars.githubusercontent.com/u/44008790?v=4" alt="About Me" className="about-img" />
                <div className='about-data grid'>
                    <div className="about-info">
                        <p className="about-description">Hi, my name is Jonathas and I'm a Software Engineer from Bahia, Brazil.
                            I've been working on every kind of solutions. Check my projects!
                            Building software since 2020, I have experience in web development, UI/UX Design, DevOps and recently mobile.
                            </p>
                        <a href="https://drive.google.com/file/d/1dBfRqmoUPh7WlkG8z286XmeNLaZIiTGN/view?usp=sharing"
                        target="_blank"
                        className="btn">Download CV
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    );

}