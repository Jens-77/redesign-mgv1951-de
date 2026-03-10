import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Verein from './pages/Verein';
import Vorstand from './pages/Vorstand';
import Singstunde from './pages/Singstunde';
import Termine from './pages/Termine';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verein" element={<Verein />} />
          <Route path="/vorstand" element={<Vorstand />} />
          <Route path="/singstunde" element={<Singstunde />} />
          <Route path="/termine" element={<Termine />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
