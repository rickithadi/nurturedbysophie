import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Journal = () => {
  return (
    <section id="journal" className="py-24 px-6 bg-forest text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="font-playfair text-cream text-4xl md:text-5xl tracking-tight font-medium">
              Blog Posts
            </h2>
          </div>

          <a
            href="https://substack.com/@nurturedbysophie"
            className="group flex items-center gap-3 bg-cream text-forest px-6 py-3 rounded-full font-bodoni text-sm hover:bg-sage hover:text-cream transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Substack
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Item 1 — Golden Hour */}
          <Link to="/blog/golden-hour" className="group cursor-pointer">
            <div className="aspect-[16/9] bg-cream/5 rounded-xl mb-6 overflow-hidden border border-cream/10">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"
                alt="Books and tea"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
            </div>
            <div className="flex items-center gap-4 mb-3 text-cream/60 text-sm font-bodoni">
              <span>Research</span>
              <span className="w-1 h-1 bg-cream/40 rounded-full"></span>
              <span>Feb 2026</span>
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl mb-3 group-hover:underline decoration-cream/30 underline-offset-4">
              The Golden Hour: Understanding the Physiology
            </h3>
            <p className="text-cream/70 text-lg font-light leading-relaxed">
              The first 60 minutes after birth are a powerful physiological window — for bonding, hormonal regulation, and a foundation of lifelong wellbeing.
            </p>
          </Link>

          {/* Blog Item 2 — Colostrum */}
          <Link to="/blog/colostrum" className="group cursor-pointer">
            <div className="aspect-[16/9] bg-cream/5 rounded-xl mb-6 overflow-hidden border border-cream/10">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2070&auto=format&fit=crop"
                alt="Mother and newborn baby"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
            </div>
            <div className="flex items-center gap-4 mb-3 text-cream/60 text-sm font-bodoni">
              <span>Education</span>
              <span className="w-1 h-1 bg-cream/40 rounded-full"></span>
              <span>Feb 2026</span>
            </div>
            <h3 className="font-playfair text-2xl md:text-3xl mb-3 group-hover:underline decoration-cream/30 underline-offset-4">
              Colostrum: When should I express it?
            </h3>
            <p className="text-cream/70 text-lg font-light leading-relaxed">
              Colostrum — often called "liquid gold" — is your baby's first nutrition. Learn what antenatal expressing is, who it's recommended for, and how to get started.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Journal;
