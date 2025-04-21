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
                            Building software since 2020, I have experience in web development, DevOps and recently mobile.
                            </p>
                        <a href="https://docs.google.com/document/d/1kvbBJnatjwBnzJhV94Fs7LRUlRxDihNGa7xJRGp9QIw/edit?usp=sharing"
                        target="_blank"
                        className="btn">Download CV
                        </a>
                    </div>
                    
                    <div className='about-skills grid'>
                        <div className='skill-data'>
                            <div className='skill-title'>
                                <h3 className='skill-name'>Front-End</h3>
                                <span className='skill-number '>80%</span>
                            </div>
                            <div className='skill-bar'>
                                <span className='skill-percentage frontend'></span>
                            </div>
                        </div>

                        <div className='skill-data'>
                            <div className='skill-title'>
                                <h3 className='skill-name'>Back-End</h3>
                                <span className='skill-number '>60%</span>
                            </div>
                            <div className='skill-bar'>
                                <span className='skill-percentage backend'></span>
                            </div>
                        </div>

                        <div className='skill-data'>
                            <div className='skill-title'>
                                <h3 className='skill-name'>DevOps</h3>
                                <span className='skill-number '>50%</span>
                            </div>
                            <div className='skill-bar'>
                                <span className='skill-percentage devops'></span>
                            </div>
                        </div>

                        <div className='skill-data'>
                            <div className='skill-title'>
                                <h3 className='skill-name'>Mobile</h3>
                                <span className='skill-number '>10%</span>
                            </div>
                            <div className='skill-bar'>
                                <span className='skill-percentage mobile'></span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );

}