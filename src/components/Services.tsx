import { Activity, ArrowRight, Baby, HeartHandshake, Wind } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="min-h-screen py-16 md:py-24 px-6 bg-forest/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12">
          <span className="font-bodoni text-forest uppercase tracking-widest text-sm mb-4 block">
            Offerings
          </span>
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium">
            Holistic Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service 1: Midwifery Care */}
          <div className="group p-8 md:p-10 rounded-2xl bg-cream border border-forest/10 hover:border-forest/40 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5">
            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-8 text-forest">
              <Baby className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-forest text-2xl md:text-3xl tracking-tight mb-4">
              Midwifery Care
            </h3>
            <p className="text-lg leading-relaxed mb-8 font-light text-sage">
              Comprehensive support through antenatal care, labour and birth assistance, and postnatal guidance. Continuity of care ensures you have a trusted midwife by your side throughout your journey.
            </p>
            <a
              href="#celebrating-motherhood"
              className="inline-flex items-center text-forest font-bodoni border-b border-forest/30 pb-1 hover:border-forest transition-colors"
            >
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Service 2: Hypnobirthing */}
          <div className="group p-8 md:p-10 rounded-2xl bg-cream border border-forest/10 hover:border-forest/40 transition-all duration-300 hover:shadow-xl hover:shadow-forest/5">
            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-8 text-forest">
              <Wind className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-forest text-2xl md:text-3xl tracking-tight mb-4">
              Hypnobirthing Supportive Caregiver
            </h3>
            <p className="text-lg leading-relaxed mb-8 font-light text-sage">
              Grounded in the philosophy of hypnobirthing, which incorporates breathwork, pelvic awareness, optimal body positioning, and mindset techniques in support of creating a calm and positive birth experience. Gentle touch, movement, grounding practices, and supportive communication further encourage informed and confident decision-making.
            </p>
            <a
              href="#celebrating-motherhood"
              className="inline-flex items-center text-forest font-bodoni border-b border-forest/30 pb-1 hover:border-forest transition-colors"
            >
              Learn more <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Service 3: Reformer Pilates */}
          <div className="group p-8 md:p-10 rounded-2xl bg-cream border border-forest/10 transition-all duration-300 relative opacity-60 cursor-not-allowed">
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 bg-sage/10 px-3 py-1 rounded-full">
              <span className="text-xs uppercase font-bodoni tracking-widest text-forest">
                Coming Soon
              </span>
            </div>

            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-8 text-forest">
              <Activity className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-forest text-2xl md:text-3xl tracking-tight mb-4">
              Reformer Pilates
            </h3>
            <p className="text-lg leading-relaxed mb-8 font-light text-sage">
              Pre-and-postnatal reformer Pilates sessions (one-on-one or in an intimate group setting), designed to strengthen your body, connect with breathwork, and support pelvic floor health throughout pregnancy and postpartum recovery.
            </p>
            <span className="inline-flex items-center text-forest font-bodoni border-b border-forest/30 pb-1">
              View schedule <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>

          {/* Service 3: Breastfeeding */}
          <div className="group p-8 md:p-10 rounded-2xl bg-cream border border-forest/10 transition-all duration-300 relative opacity-60 cursor-not-allowed">
            {/* Coming Soon Badge */}
            <div className="absolute top-4 right-4 bg-sage/10 px-3 py-1 rounded-full">
              <span className="text-xs uppercase font-bodoni tracking-widest text-forest">
                Coming Soon
              </span>
            </div>

            <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-8 text-forest">
              <HeartHandshake className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-playfair text-forest text-2xl md:text-3xl tracking-tight mb-4">
              Lactation Consultant
            </h3>
            <p className="text-lg leading-relaxed mb-8 font-light text-sage">
              Breastfeeding education and support to help establish and maintain a successful relationship and routine between your body and your baby. This will be personalised guidance as it is a unique journey.
            </p>
            <span className="inline-flex items-center text-forest font-bodoni border-b border-forest/30 pb-1">
              Learn More! <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
