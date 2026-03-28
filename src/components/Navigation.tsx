import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (!element) return;
    const navHeight = navBarRef.current?.offsetHeight ?? 80;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - navHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-cream/80 backdrop-blur-md border-b border-forest/10">
      <div ref={navBarRef} className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="NurturedbySophie"
            className="h-14 w-14 md:h-32 md:w-32"
          />
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <button
            onClick={() => scrollToSection('services')}
            className="text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollToSection('journal')}
            className="text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
          >
            Blogs
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 rounded-full border border-forest text-forest text-sm font-bodoni hover:bg-forest hover:text-cream transition-all duration-300"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-forest"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-forest/10">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection('journal')}
              className="block w-full text-left text-sm font-bodoni uppercase tracking-widest text-forest hover:text-sage transition-colors"
            >
              Blogs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-5 py-2.5 rounded-full border border-forest text-forest text-sm font-bodoni hover:bg-forest hover:text-cream transition-all duration-300 text-center"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
