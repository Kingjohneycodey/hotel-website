import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
// import Home from './pages/Home.jsx'; // Ensure you have a Home component
import Hotels from './pages/Hotels.jsx';
import Room from './pages/Room.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
        <Route path='' element={<Home />} />

          <Route path='hotels' element={<Hotels />} />
          <Route path='rooms' element={<Room />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
