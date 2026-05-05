import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Skills from './pages/Skills'

import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/portfolio-frontend">
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/habilidades" element={<Skills />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
