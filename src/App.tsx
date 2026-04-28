import { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Journal from './components/Journal';
import Contact from './components/Contact';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CodeOfConduct from './pages/CodeOfConduct';

const ScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.key]);
  return null;
};

const MainSite = () => (
  <div className="bg-cream text-sage antialiased selection:bg-forest selection:text-cream">
    <Navigation />
    <Hero />
    <About />
    <Services />
    <Journal />
    <Contact />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/code-of-conduct" element={<CodeOfConduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
