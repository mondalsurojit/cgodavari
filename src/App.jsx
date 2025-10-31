import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import About from './pages/About';
import Research from './pages/Research';
import Deliverables from './pages/Deliverables';
import Members from './pages/Members';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/research" element={<Research />} />
          <Route path="/deliverables" element={<Deliverables />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;