import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.page';
import Research from './pages/Research.page';
import Deliverables from './pages/Deliverables.page';
import Reports from './pages/Reports.page';
import Members from './pages/Members.page';
import Gallery from './pages/Gallery.page';
import Contact from './pages/Contact.page';
import NotFound from './pages/NotFound.page';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/deliverables" element={<Deliverables />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/members" element={<Members />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;