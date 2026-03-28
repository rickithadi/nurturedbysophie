import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const CodeOfConduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      title: 'Women-Centred Care',
      body: 'I respect the dignity, values, and autonomy of all women and families. Care is guided by compassion, cultural safety, and informed choice.',
    },
    {
      title: 'Professional Boundaries',
      body: 'I maintain clear and appropriate professional boundaries in all interactions, both online and in person.',
    },
    {
      title: 'Privacy and Confidentiality',
      body: 'I respect and protect the privacy of individuals. No personal or identifiable information will ever be shared without consent.',
    },
    {
      title: 'Safe and Evidence-Based Practice',
      body: 'All information shared is grounded in current knowledge and best practice. I acknowledge the limits of my role as a student and will always encourage seeking qualified medical care where appropriate.',
    },
    {
      title: 'Cultural Safety and Respect',
      body: 'I am committed to providing care that is respectful of diverse cultural backgrounds, beliefs, and experiences, including Aboriginal and Torres Strait Islander peoples.',
    },
    {
      title: 'Honesty and Transparency',
      body: 'I clearly communicate my role as a student midwife and do not present myself as a qualified practitioner until registered.',
    },
    {
      title: 'Continuous Learning',
      body: 'I am dedicated to ongoing education and reflective practice to ensure safe and effective care.',
    },
    {
      title: 'Social Media and Online Conduct',
      body: 'All content shared on this platform is respectful, professional, and aligned with ethical guidelines. This space is intended for education, reflection, and empowerment — not clinical diagnosis or treatment.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream text-forest antialiased">
      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => { window.location.href = '/#contact'; }}
          className="group inline-flex items-center gap-2 font-bodoni text-sm uppercase tracking-widest text-forest/60 hover:text-forest transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back
        </button>
      </div>

      {/* Title */}
      <div className="max-w-3xl mx-auto px-6 mb-12 pt-4">
        <p className="font-bodoni text-sm uppercase tracking-widest text-sage mb-4">Practice Standards</p>
        <h1 className="font-playfair text-3xl md:text-5xl text-forest leading-tight tracking-tight font-medium mb-8">
          Code of Conduct
        </h1>
        <p className="font-helvetica text-forest/80 text-lg leading-relaxed">
          As a student midwife and future practitioner, I am committed to upholding the principles outlined by the{' '}
          <a
            href="https://www.nursingmidwiferyboard.gov.au/Codes-Guidelines-Statements/Professional-standards/Midwife-standards-for-practice.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 decoration-forest/40 hover:decoration-forest transition-colors"
          >
            Nursing and Midwifery Board of Australia
          </a>{' '}
          and delivering respectful, safe, and evidence-based care.
        </p>
      </div>

      {/* Principles */}
      <article className="max-w-3xl mx-auto px-6 pb-24 space-y-8">
        {principles.map((p, i) => (
          <section key={i} className="space-y-2">
            <h2 className="font-playfair text-xl md:text-2xl text-forest font-semibold">
              {i + 1}. {p.title}
            </h2>
            <p className="font-helvetica text-forest/80 text-lg leading-relaxed">{p.body}</p>
          </section>
        ))}
      </article>
    </div>
  );
};

export default CodeOfConduct;
