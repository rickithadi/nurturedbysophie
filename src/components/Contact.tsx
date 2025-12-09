import { Leaf, Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-forest/10 bg-cream">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12 flex justify-center text-forest">
          <Leaf className="w-10 h-10 stroke-[1]" />
        </div>
        
        <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight mb-8">
          Let's connect
        </h2>
        <p className="text-xl font-light mb-10 max-w-xl mx-auto text-sage">
          Whether you are looking for midwifery care or want to join a Pilates class, I would love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href="mailto:hello@nurturedbysophie.com" 
            className="flex items-center gap-3 px-8 py-4 bg-forest text-cream rounded-full text-lg hover:bg-sage transition-colors"
          >
            <Mail className="w-5 h-5" />
            hello@nurturedbysophie.com
          </a>
          <a 
            href="#" 
            className="flex items-center gap-3 px-8 py-4 border border-forest/20 rounded-full text-lg text-forest hover:border-forest transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @nurturedbysophie
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-forest/10 text-sm font-bodoni text-sage/60">
          <p>© 2023 Nurtured by Sophie.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-forest transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-forest transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;