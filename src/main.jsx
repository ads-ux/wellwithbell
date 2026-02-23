import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import MenopauseWeightLoss from './pages/MenopauseWeightLoss.jsx';
import HormoneSupport from './pages/HormoneSupport.jsx';
import EnergyAndSleep from './pages/EnergyAndSleep.jsx';
import SkinAndBeauty from './pages/SkinAndBeauty.jsx';
import Resources from './pages/Resources.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './components/Layout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menopause-weight-loss" element={<MenopauseWeightLoss />} />
          <Route path="hormone-support" element={<HormoneSupport />} />
          <Route path="energy-sleep" element={<EnergyAndSleep />} />
          <Route path="skin-beauty" element={<SkinAndBeauty />} />
          <Route path="resources" element={<Resources />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
