const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <span className="font-bodoni text-forest uppercase tracking-widest text-sm mb-4 block">
            Philosophy
          </span>
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium">
            About
          </h2>
        </div>

        {/* Two Column Layout - Image Left, Content Right */}
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          {/* Left Column - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden bg-sage/10">
              <img
                src="/sophie-photo.jpg"
                alt="Sophie Akther - Midwife"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-1/2">
            <h3 className="font-bodoni text-sage text-xl md:text-2xl italic font-light tracking-wide mb-6">
              Sophie Jasmine Akther
            </h3>
            <p className="font-bodoni text-forest text-base md:text-lg tracking-wide mb-8">
              Continuity of Care – Hypnobirthing Support - Pre-Postnatal Reformer Pilates Instructor – Breastfeeding Education – Holistic Midwife
            </p>

            <div className="space-y-6 text-lg font-light leading-relaxed text-sage">
              <div>
                <p className="font-medium text-forest mb-2">Embracing Midwifery Care</p>
                <p>
                  At NurturedBySophie, Sophie embraces a holistic approach to midwifery care, tailoring her support to your unique needs. She is dedicated to creating positive experiences throughout your pregnancy, birth journey, and beyond! Her overall outlook is to advocate and support your choices and ensure the safety and health of you and your baby.
                </p>
              </div>
              <div>
                <p className="font-medium text-forest mb-2">Personalised Support</p>
                <p>
                  Sophie provides personalised support and evidence-based care to promote and respect your choices, honour your birth preferences, and ensure you feel safe, heard, and empowered, from prenatal care to postpartum support. Your process and journey will be her priority.
                </p>
              </div>
              <div>
                <p className="font-medium text-forest mb-2">Meet Sophie</p>
                <p>
                  Sophie brings a diverse background and a deep commitment to overall well-being (inc. mental, physiological, social, and financial) to her midwifery practice. She has a particular passion to advocate for natural and physiological pregnancy journeys, and is dedicated to providing compassionate and inclusive care to all expecting mothers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Celebrating Motherhood Section */}
        <div id="celebrating-motherhood" className="min-h-[80vh] flex flex-col justify-start pt-16 md:pt-24 -mb-16 md:-mb-20 text-center max-w-4xl mx-auto">
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium mb-12">
            Celebrating Motherhood
          </h2>
          <div className="space-y-6 text-lg font-light leading-relaxed text-sage">
            <p>
              Sophie is a student midwife at ACU, graduating in 2027. She is deeply committed to woman-centred care and aspires to become a private midwife, advocating for physiological birth and specialising in home birth.
            </p>
            <p>
              Currently, Sophie offers her support as a student midwife, providing a consistent and reassuring presence throughout your pregnancy journey. This continuity of care allows her to be involved every step of the way, creating a space where you can learn, grow, and feel supported together.
            </p>
            <p>
              Alongside her midwifery studies, Sophie is training in Reformer Pilates, with plans to specialise in pre- and postnatal Pilates, as well as Hypnobirthing Supportive Care by 2026. These pursuits reflect her commitment to expanding her knowledge and providing holistic, women-centred care during pregnancy and beyond.
            </p>
            <p>
              If you feel aligned with Sophie's approach and would like her support throughout your journey, please don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
