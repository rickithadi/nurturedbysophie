import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-cream/80 backdrop-blur-md border-b border-forest/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a 
          href="#" 
          className="font-playfair text-forest text-xl tracking-tight font-medium hover:opacity-80 transition-opacity"
        >
          Nurtured by Sophie
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a 
            href="#services" 
            className="text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
          >
            Services
          </a>
          <a 
            href="#about" 
            className="text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
          >
            Philosophy
          </a>
          <a 
            href="#journal" 
            className="text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
          >
            Journal
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-full border border-forest text-forest text-sm font-bodoni hover:bg-forest hover:text-cream transition-all duration-300"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-forest"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-forest/10">
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#services" 
              className="block text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="block text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Philosophy
            </a>
            <a 
              href="#journal" 
              className="block text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Journal
            </a>
            <a 
              href="#contact" 
              className="block px-5 py-2.5 rounded-full border border-forest text-forest text-sm font-bodoni hover:bg-forest hover:text-cream transition-all duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;