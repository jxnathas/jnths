import './App.css';
import { About } from './components/About/About.js';
import { Home } from './components/Home/Home.js';
import { NavBar } from './components/NavBar/NavBar.js';

function App() {
  return (
    <>
      <Home />
      <NavBar />
      <About />
    </>
  );
}

export default App;
