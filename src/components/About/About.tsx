import './About.css';

export const About = () => {
    return (
        <section className="about section container" id='about'>
            <h2 className="section_title">About Me</h2>

            <div className="about-container">
                <img src="https://avatars.githubusercontent.com/u/44008790?v=4" alt="Jonathas Santos" className="about-img" />

                <div className='about-data'>
                    <p className="about-lead">
                        I was just a 7-year-old kid when I discovered Ragnarok Online at a local internet café.
                    </p>

                    <p>
                        The moment I saw that game, I became completely obsessed with it. Looking back,
                        I think a lot of what I learned back then started with a single motivation:
                    </p>

                    <p className="about-highlight">I wanted to get better at Ragnarok.</p>

                    <p>
                        First came English. I needed to understand what the people on those forums were talking about.
                    </p>

                    <p>
                        Then came web design. I wanted to build things for my own server, make everything feel
                        like mine, and understand how those websites actually worked.
                    </p>

                    <p>And eventually, programming.</p>

                    <p>
                        Back then, I didn't have a computer or internet at home. But as soon as I got my first
                        computer and internet connection, I started exploring everything I could find.
                    </p>

                    <p>Videos and forum posts with titles like:</p>

                    <blockquote className="about-quote">
                        "How to create your own private server"
                    </blockquote>

                    <blockquote className="about-quote">
                        "How to easily create a Ragnarok server"
                    </blockquote>

                    <p>
                        Spoiler: <strong>it wasn't easy.</strong>
                    </p>

                    <p>
                        At some point, I even reached out to one of the developers of a popular Ragnarok server
                        at the time. I told him I was 14, didn't have a team, and, technically speaking,
                        wasn't a programmer.
                    </p>

                    <p>He chuckled on Skype.</p>

                    <p>Never replied again.</p>

                    <p>So I did what any reasonable teenager would do:</p>

                    <p className="about-highlight">I tried to build it myself.</p>

                    <p>And somehow, it worked.</p>

                    <p>
                        I started developing my own server with the little knowledge I had. I made the artwork,
                        the logo, the website, the famous Control Panel, configured eAthena, set up the server
                        rates, and basically learned everything along the way.
                    </p>

                    <p>My "tech stack" back then was something like:</p>

                    <p className="about-stack">
                        HTML, CSS, JavaScript, PHP, MySQL, FileZilla, Visual Basic, and Lua.
                    </p>

                    <p>
                        Looking back, I realize I was probably committing some kind of crime against
                        software engineering.
                    </p>

                    <p>But it worked.</p>

                    <p>
                        Eventually, I managed to get the server online. At first, it was only accessible to people
                        using the same internet provider I was using.
                    </p>

                    <p>The problem was, I didn't exactly have money to spend on hosting.</p>

                    <p>So I thought:</p>

                    <p className="about-highlight about-italic">"Why not just host it at home?"</p>

                    <p>
                        That's how I discovered the wonderful world of <strong>port forwarding</strong>.
                    </p>

                    <p>
                        What I didn't know yet was the difference between server-side and client-side, network
                        security, exposing services to the internet, and basically anything related to security.
                    </p>

                    <p>The result?</p>

                    <p className="about-highlight">My server got hacked.</p>

                    <p>And that's how I stopped programming for a while.</p>

                    <p>
                        Years later, I started college and discovered that, apparently, I hadn't escaped
                        programming after all.
                    </p>

                    <p>
                        Now I had to learn <strong>programming logic, pointers in C, and all those things that
                        seem specifically designed to make you question your life choices.</strong>
                    </p>

                    <p>But this time, it was different.</p>

                    <p>The kid who wanted to build a Ragnarok server was still there.</p>

                    <p>
                        I just had better tools, bigger problems, and, finally, a better idea of what
                        I was actually doing.
                    </p>

                    <p className="about-closing">
                        And that's where my journey as a software engineer really began.
                    </p>

                    <a
                        href="https://drive.google.com/file/d/1dBfRqmoUPh7WlkG8z286XmeNLaZIiTGN/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn about-btn"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    );
}
