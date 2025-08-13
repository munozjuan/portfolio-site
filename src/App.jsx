import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import ParkProtectors from './pages/ParkProtectors';
import Stonewall from './pages/Stonewall';
import WickedProblem from './pages/WickedProblem';
import FadeWrapper from "./components/FadeWrapper";

function AppContent() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      <div className={`${isHomePage ? 'w-full p-0 m-0' : 'pt-20 px-4 max-w-screen-xl mx-auto'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/park-protectors" element={<ParkProtectors />} />
          <Route path="/projects/stonewall" element={<Stonewall />} />
          <Route path="/projects/wicked-problem" element={<WickedProblem />} />
          <Route path="/projects/park-protectors" element={<FadeWrapper><ParkProtectors /></FadeWrapper>} />
          
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
