import { Sprout, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto min-h-[90vh]">
      {/* Decorative Icon */}
      <div className="mb-8 text-forest animate-fade-in">
        <Sprout className="w-12 h-12 stroke-[1.5]" />
      </div>

      <h1 className="font-playfair text-forest text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] font-normal mb-8">
        NUR<br />
        <span className="italic font-light">TUR</span><br />
        ED
      </h1>

      <p className="font-bodoni text-forest text-xl md:text-2xl italic font-light tracking-wide mb-12 max-w-lg">
        "Empowering your journey into motherhood with grace and grounded support."
      </p>

      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <a 
          href="#contact" 
          className="inline-flex items-center justify-center px-8 py-4 bg-forest text-cream rounded-full text-base font-bodoni tracking-wide hover:bg-sage transition-all duration-300 shadow-lg shadow-forest/10"
        >
          Book a Consultation
        </a>
        <a 
          href="#services" 
          className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-forest/30 text-forest rounded-full text-base font-bodoni tracking-wide hover:border-forest transition-all duration-300"
        >
          View Services
        </a>
      </div>
      
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-6 h-6 text-forest/50" />
      </div>
    </header>
  );
};

export default Hero;