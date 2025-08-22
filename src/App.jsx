import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import ParkProtectors from "./pages/ParkProtectors";
import Stonewall from "./pages/Stonewall";
import WickedProblem from "./pages/WickedProblem";
import FadeWrapper from "./components/FadeWrapper";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <>
      <Navbar />
      {/* add bottom padding so long pages aren't clipped */}
    
      <div className={isHomePage ? "w-full p-0 m-0" : "pt-20 pb-[max(env(safe-area-inset-bottom),6rem)] px-4 max-w-screen-xl mx-auto"}
>

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          {/* project pages */}
          <Route path="/projects/park-protectors" element={<FadeWrapper><ParkProtectors /></FadeWrapper>} />
          <Route path="/projects/stonewall"        element={<FadeWrapper><Stonewall /></FadeWrapper>} />
          <Route path="/projects/wicked-problem"   element={<FadeWrapper><WickedProblem /></FadeWrapper>} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/">
      <AppContent />
    </BrowserRouter>
  );
}
