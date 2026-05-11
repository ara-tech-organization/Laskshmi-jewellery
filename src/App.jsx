import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Gold from './pages/Gold';
import Silver from './pages/Silver';
import Platinum from './pages/Platinum';
import Diamond from './pages/Diamond';
import Bridal from './pages/Bridal';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gold" element={<Gold />} />
        <Route path="/silver" element={<Silver />} />
        <Route path="/platinum" element={<Platinum />} />
        <Route path="/diamond" element={<Diamond />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
