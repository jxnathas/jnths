import './App.css';
import { About } from './components/About/About.js';
import { Home } from './components/Home/Home.js';
import { Projects } from './components/Projects/Projects.js';
import { Resume } from './components/Resume/Resume.js';
import { Contact } from './components/Contact/Contact.js';
import { ScrollIndicator } from './components/ScrollIndicator/ScrollIndicator.js';

function App() {
  return (
    <div className="App">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="terminal-title">jnths@portfolio:~$</span>
      </div>
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <ScrollIndicator />
    </div>
  );
}

export default App;
