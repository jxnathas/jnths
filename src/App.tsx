import './App.css';
import { About } from './components/About/About.js';
import { Home } from './components/Home/Home.js';
import { Resume } from './components/Resume/Resume.js';
import { Contact } from './components/Contact/Contact.js';

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
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
