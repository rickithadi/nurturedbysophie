import { Flower2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden bg-sage/10">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" 
              alt="Midwife holding baby hands" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 text-forest rotate-12">
            <Flower2 className="w-24 h-24 stroke-[0.5] opacity-20" />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <span className="font-bodoni text-forest uppercase tracking-widest text-sm mb-6 block">
            About Sophie
          </span>
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium mb-8">
            My Philosophy
          </h2>
          <div className="space-y-6 text-lg font-light leading-relaxed text-sage">
            <p>
              I believe that birth is a profound rite of passage, not just a medical event. My approach is rooted in the understanding that when a woman feels safe, heard, and nurtured, her body can do the incredible work it was designed to do.
            </p>
            <p>
              Through a blend of evidence-based midwifery care and holistic movement practices like Pilates, I aim to bridge the gap between physical preparation and emotional well-being.
            </p>
            <p>
              "Nurtured" isn't just a name; it is the core tenet of my practice. Whether on the mat or in the birth suite, my role is to walk beside you.
            </p>
          </div>
          <div className="mt-10">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" 
              alt="Sophie Signature" 
              className="h-12 opacity-40 invert-[.35] sepia saturate-[.5] hue-rotate-[50deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;