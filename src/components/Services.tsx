import { Baby, Activity, HeartHandshake, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-forest/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="font-bodoni text-forest uppercase tracking-widest text-sm mb-4 block">
            Offerings
          </span>
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium">
            Holistic Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: COCE */}
          <div className="group p-8 md:p-10 rounded-2xl bg-cream border border-forest/10 hover:border-forest/40 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5">
            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-8 text-forest">
              <Baby className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-forest text-2xl md:text-3xl tracking-tight mb-4">
              COCE Midwifery
            </h3>
            <p className="text-lg leading-relaxed mb-8 font-light text-sage">
              Continuity of Care Experience. Providing dedicated support throughout your pregnancy journey, ensuring a familiar face and consistent guidance from conception to postpartum.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-forest font-bodoni border-b border-forest/30 pb-1 hover:border-forest transition-colors"
            >
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Service 2: Pilates */}
          <div className="group p-8 md:p-10 rounded-2xl bg-cream border border-forest/10 hover:border-forest/40 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5">
            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-8 text-forest">
              <Activity className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-forest text-2xl md:text-3xl tracking-tight mb-4">
              Mat Pilates
            </h3>
            <p className="text-lg leading-relaxed mb-8 font-light text-sage">
              Gentle, strength-building movement designed specifically for the maternal body. Focus on pelvic floor health, core stability, and mindful breathing techniques.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-forest font-bodoni border-b border-forest/30 pb-1 hover:border-forest transition-colors"
            >
              View schedule <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Service 3: Breastfeeding */}
          <div className="group p-8 md:p-10 rounded-2xl bg-cream border border-dashed border-forest/20 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-sage/10 px-3 py-1 rounded-full">
              <span className="text-xs uppercase font-bodoni tracking-widest text-forest">
                Coming Soon
              </span>
            </div>
            <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center mb-8 text-forest/60">
              <HeartHandshake className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-forest/70 text-2xl md:text-3xl tracking-tight mb-4">
              Breastfeeding Support
            </h3>
            <p className="text-lg leading-relaxed mb-8 font-light text-sage/80">
              Specialized lactation consulting to support you and your baby in establishing a comfortable and successful breastfeeding relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;