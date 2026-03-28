import { Sprout, Mail, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 px-6 border-t border-forest/10 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Main Contact Section */}
        <div className="text-center mb-8">
          <div className=" flex justify-center text-forest">
            <Sprout className="w-16 h-16 stroke-[1.5]" />
          </div>

          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight mb-8">
            Let's connect
          </h2>
          <p className="text-xl font-light mb-10 max-w-xl mx-auto text-sage">
            Whether you are looking for midwifery care or want to join a Pilates class, I would love to hear from you.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="mailto:hello@nurturedbysophie.com"
              className="flex items-center gap-3 px-8 py-4 bg-forest text-cream rounded-full text-lg hover:bg-sage transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@nurturedbysophie.com
            </a>
            <a
              href="https://instagram.com/nurturedbysophie"
              className="flex items-center gap-3 px-8 py-4 border border-forest/20 rounded-full text-lg text-forest hover:border-forest transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @nurturedbysophie
            </a>
          </div>
        </div>

        {/* Footer Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-forest/10">
          <div>
            <h3 className="font-bodoni text-forest text-sm uppercase tracking-widest mb-3">
              Location
            </h3>
            <p className="text-sage">Melbourne, Victoria</p>
          </div>

          <div>
            <h3 className="font-bodoni text-forest text-sm uppercase tracking-widest mb-3">
              ABN
            </h3>
            <p className="text-sage">[ABN Number]</p>
          </div>

          <div>
            <h3 className="font-bodoni text-forest text-sm uppercase tracking-widest mb-3">
              Resources
            </h3>
            <div className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sage hover:text-forest transition-colors">
                Privacy Policy
              </Link>
              <Link to="/code-of-conduct" className="text-sage hover:text-forest transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>

        {/* Land Acknowledgment */}
        <div className="py-8 text-center">
          <p className="text-sm text-sage/80 leading-relaxed max-w-3xl mx-auto italic">
            I acknowledge the Traditional Custodians of the land on which I work and live,
            the Wurundjeri people of the Kulin Nation. I pay my respects to their Elders
            past, present, and emerging, and recognize their continuing connection to land,
            waters, and culture.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-forest/10 text-center">
          <p className="text-sm font-bodoni text-sage/60">
            ©2026 NurturedbySophie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
