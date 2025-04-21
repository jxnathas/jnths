import './App.css';
import { About } from './components/About/About.js';
import { Home } from './components/Home/Home.js';
import { NavBar } from './components/NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <NavBar />
        <About />
      </main>
    </div>
  );
}

export default App;
