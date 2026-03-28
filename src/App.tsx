import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Journal from './components/Journal';
import Contact from './components/Contact';
import BlogPost from './pages/BlogPost';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CodeOfConduct from './pages/CodeOfConduct';

const MainSite = () => (
  <div className="bg-cream text-sage antialiased selection:bg-forest selection:text-cream">
    <Navigation />
    <Hero />
    <Services />
    <About />
    <Journal />
    <Contact />
  </div>
);

function App() {
  return (
    <BrowserRouter>
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
