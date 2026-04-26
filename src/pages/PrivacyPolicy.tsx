import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Information I Collect',
      body: 'I may collect personal information that you voluntarily provide, including:',
      list: ['Name', 'Email address', 'Any information you include in contact forms or messages'],
    },
    {
      title: 'How Your Information Is Used',
      body: 'Your information may be used to:',
      list: [
        'Respond to enquiries or messages',
        'Share updates or resources (if you opt in)',
        'Improve website content and user experience',
      ],
      footer: 'I will never sell, rent, or trade your personal information.',
    },
    {
      title: 'Storage and Security',
      body: 'I take reasonable steps to protect your personal information from misuse, loss, or unauthorised access. However, no online platform can guarantee complete security.',
    },
    {
      title: 'Third-Party Services',
      body: 'This website may use third-party services (e.g., email platforms, analytics tools, or external links such as Substack and Instagram). These services have their own privacy policies.',
    },
    {
      title: 'Cookies',
      body: 'This website may use cookies to improve your browsing experience. You can disable cookies through your browser settings.',
    },
    {
      title: 'Health Information Disclaimer',
      body: 'Any information shared on this website is for educational and informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.',
    },
    {
      title: 'Your Rights',
      body: 'You may request access to, correction of, or deletion of your personal information at any time by contacting me.',
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
        <p className="font-bodoni text-sm uppercase tracking-widest text-sage mb-4">Legal</p>
        <h1 className="font-playfair text-3xl md:text-5xl text-forest leading-tight tracking-tight font-medium mb-4">
          Privacy Policy
        </h1>
        <p className="font-helvetica text-forest/50 text-sm">Last updated: 28/03/2026</p>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 pb-24 space-y-10">

        <section className="space-y-2">
          <p className="font-helvetica text-forest/80 text-lg leading-relaxed">
            This website is owned and operated by Sophie Akther. Your privacy is important to me, and I am committed to protecting any personal information you share.
          </p>
        </section>

        {sections.map((s, i) => (
          <section key={i} className="space-y-3">
            <h2 className="font-playfair text-xl md:text-2xl text-forest font-semibold">
              {i + 1}. {s.title}
            </h2>
            <p className="font-helvetica text-forest/80 text-lg leading-relaxed">{s.body}</p>
            {s.list && (
              <ul className="space-y-2">
                {s.list.map((item, j) => (
                  <li key={j} className="flex gap-3 font-helvetica text-forest/80 text-lg leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {s.footer && (
              <p className="font-helvetica text-forest/80 text-lg leading-relaxed">{s.footer}</p>
            )}
          </section>
        ))}

        {/* Contact section */}
        <section className="space-y-3">
          <h2 className="font-playfair text-xl md:text-2xl text-forest font-semibold">
            8. Contact
          </h2>
          <p className="font-helvetica text-forest/80 text-lg leading-relaxed">
            If you have any questions or concerns about this Privacy Policy, please contact:
          </p>
          <a
            href="mailto:nurturedbysophie@yahoo.com"
            className="inline-block font-helvetica text-forest text-lg underline underline-offset-2 decoration-forest/40 hover:decoration-forest transition-colors"
          >
            nurturedbysophie@yahoo.com
          </a>
        </section>

      </article>
    </div>
  );
};

export default PrivacyPolicy;
