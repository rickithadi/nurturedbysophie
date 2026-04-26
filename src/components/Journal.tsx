import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Journal = () => {
  return (
    <section id="journal" className="min-h-screen py-16 md:py-24 px-6 bg-forest text-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-8">
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
                src="/golden-hour-hero.jpg"
                alt="Newborn baby held after birth"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
            </div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-bodoni text-xs uppercase tracking-widest bg-cream/10 border border-cream/20 text-cream/80 px-2.5 py-0.5 rounded-full">
                {blogPosts[0].tag}
              </span>
              <span className="w-1 h-1 bg-cream/40 rounded-full"></span>
              <span className="font-bodoni text-sm text-cream/60">{blogPosts[0].date}</span>
            </div>
            <p className="font-bodoni text-xs text-cream/50 mb-3">Written by {blogPosts[0].author}</p>
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
                src="/colostrum-hero.jpg"
                alt="Mother breastfeeding newborn baby"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
            </div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="font-bodoni text-xs uppercase tracking-widest bg-cream/10 border border-cream/20 text-cream/80 px-2.5 py-0.5 rounded-full">
                {blogPosts[1].tag}
              </span>
              <span className="w-1 h-1 bg-cream/40 rounded-full"></span>
              <span className="font-bodoni text-sm text-cream/60">{blogPosts[1].date}</span>
            </div>
            <p className="font-bodoni text-xs text-cream/50 mb-3">Written by {blogPosts[1].author}</p>
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
