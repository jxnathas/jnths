import './App.css';
import { About } from './components/About/About.js';
import { Controls } from './components/Controls/Controls.js';
import { Home } from './components/Home/Home.js';
import { Resume } from './components/Resume/Resume.js';
import { Contact } from './components/Contact/Contact.js';
import { ThemeProvider } from './context/ThemeContext.js';
import { LanguageProvider } from './context/LanguageContext.js';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="terminal-title">jnths@portfolio:~$</span>
            <Controls />
          </div>
          <main>
            <Home />
            <About />
            <Resume />
            <Contact />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
