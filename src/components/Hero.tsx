import { Sprout } from 'lucide-react';

const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (!element) return;
  const nav = document.querySelector('nav > div');
  const navHeight = (nav as HTMLElement | null)?.offsetHeight ?? 80;
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - navHeight,
    behavior: 'smooth',
  });
};

const Hero = () => {
  return (
    <header className="h-screen relative px-6 flex flex-col items-center justify-center text-center pt-20 md:pt-40 pb-8">
      {/* Sprout Icon */}
      <div className="mb-4 animate-fade-in text-forest">
        <Sprout className="w-20 h-20 stroke-[1.5]" />
      </div>

      {/* Wordmark - Canva Style */}
      <h1 className="font-playfair text-forest text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight font-medium mb-8">
        NurturedbySophie
      </h1>

      {/* Tagline */}
      <p className="font-helvetica text-forest text-2xl md:text-3xl italic font-light tracking-wide mb-12 max-w-2xl">
        Guiding you from bump to baby, and beyond!
      </p>

      {/* CTA */}
      <button
        onClick={scrollToContact}
        className="px-8 py-4 rounded-full border border-forest text-forest text-lg font-bodoni hover:bg-forest hover:text-cream transition-all duration-300"
      >
        Get in touch
      </button>
    </header>
  );
};

export default Hero;
