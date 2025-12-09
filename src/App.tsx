import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Journal from './components/Journal';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-cream text-sage antialiased selection:bg-forest selection:text-cream">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Journal />
      <Contact />
    </div>
  )
}

export default App
