import './App.css';
import { About } from './components/About/About.js';
import { Home } from './components/Home/Home.js';
import { NavBar } from './components/NavBar/NavBar.js';
import { Services } from './components/Services/Services.js';
import { Projects } from './components/Projects/Projects.js';
import { Resume } from './components/Resume/Resume.js';
import { Contact } from './components/Contact/Contact.js';
import { ScrollIndicator } from './components/ScrollIndicator/ScrollIndicator.js';

function App() {
  return (
    
    <div className="App">
      <header className='home-bg'>
        <svg 
          className="waves" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          width="300%"
        >
            <path
              className='wave-1' 
              fill="#8accd5" 
              fillOpacity="1" 
              d="M0,64L40,85.3C80,107,160,149,240,149.3C320,149,400,107,480,74.7C560,43,640,21,720,26.7C800,32,880,64,960,69.3C1040,75,1120,53,1200,74.7C1280,96,1360,160,1400,192L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
            </path>
            <path
              className='wave-2' 
              fill="#6FB7C2" 
              fillOpacity="1" 
              d="M0,224L40,213.3C80,203,160,181,240,192C320,203,400,245,480,261.3C560,277,640,267,720,240C800,213,880,171,960,160C1040,149,1120,171,1200,165.3C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">     
            </path>
            <path
              className='wave-3' 
              fill="#4A8B99" 
              fillOpacity="1" 
              d="M0,256L40,218.7C80,181,160,107,240,80C320,53,400,75,480,122.7C560,171,640,245,720,250.7C800,256,880,192,960,181.3C1040,171,1120,213,1200,218.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
            </path>
        </svg>
      </header>
      <main>
        <Home />
        <NavBar />
        <About />
        <Services />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <ScrollIndicator />
    </div>
  );
}

export default App;
