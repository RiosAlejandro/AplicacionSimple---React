import React from 'react';
import './App.css';
import Index from './Components/Index';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Imagen from './Components/Imagen';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
              
            <Route path="/imagenes" element={<Imagen />} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
