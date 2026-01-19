import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0 animated-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="stars-layer"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </div>

        <LoadingScreen />
      </div>
    </Router>
  );
}

export default App;