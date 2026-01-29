const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
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
              Continuity of Care – Pre-postnatal Reformer Pilates Instructor – Breastfeeding Education – Holistic Midwife
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
        <div id="celebrating-motherhood" className="mt-24 md:mt-32 text-center max-w-4xl mx-auto">
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium mb-12">
            Celebrating Motherhood
          </h2>
          <div className="space-y-6 text-lg font-light leading-relaxed text-sage">
            <p>
              Sophie is a student Midwife at ACU, graduating in 2027. She is deeply committed to women-centred care and aims to one day be a private midwife, advocating and specialising in physiological births, specifically home births.
            </p>
            <p>
              Currently, Sophie can offer her services as a student and be a supportive presence alongside your pregnancy journey, providing continuity of care. The benefits of this experience are that she will be committed and be a part of every step of your pregnancy, learning from each other.
            </p>
            <p>
              Sophie is also training in Reformer Pilates as of 2026, in hopes to specialise in pre- and postnatal Reformer Pilates. This endeavour is fuelled by the desire to expand her knowledge and expertise when it comes to supporting pregnant women, which reflects her holistic approach within her services.
            </p>
            <p>
              If you're interested in Sophie's services, please don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
