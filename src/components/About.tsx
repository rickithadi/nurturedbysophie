const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-bodoni text-forest uppercase tracking-widest text-sm mb-4 block">
            About Sophie
          </span>
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium">
            My Philosophy
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
              Sophie Akther
            </h3>
            <p className="font-bodoni text-forest text-base md:text-lg tracking-wide mb-8">
              Home Birth - Continuity of Care - Pre-postnatal Reformer Pilates Instructor
            </p>

            <div className="space-y-6 text-lg font-light leading-relaxed text-sage">
              <p>
                I believe in the power of continuity of care and the profound impact it has on the birthing experience. Supporting women through their pregnancy journey with compassion and evidence-based practice is at the heart of everything I do.
              </p>
              <p>
                Every woman's journey is unique. I provide tailored care that respects your choices, honors your birth preferences, and ensures you feel safe, heard, and empowered throughout the process.
              </p>
              <p>
                As a qualified midwife and pre-postnatal Pilates instructor, I bring together holistic care that nurtures both body and mind. My approach blends movement, mindfulness, and midwifery expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Celebrating Motherhood Section */}
        <div className="mt-24 md:mt-32 text-center max-w-4xl mx-auto">
          <h2 className="font-playfair text-forest text-4xl md:text-5xl tracking-tight font-medium mb-12">
            Celebrating Motherhood
          </h2>
          <div className="space-y-6 text-lg font-light leading-relaxed text-sage">
            <p>
              Sophie is a student Midwife at ACU, deeply committed to women-centered care and aspiring toward private midwifery practice specializing in home births. Her passion lies in providing continuity of care throughout your pregnancy journey, offering support as a student while learning alongside you.
            </p>
            <p>
              Additionally, Sophie has trained as a pre- and postnatal mat Pilates instructor, developed to expand her knowledge in supporting pregnant women through a holistic approach that nurtures both body and mind.
            </p>
            <p>
              If you're interested in Sophie's care, please feel free to reach out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
