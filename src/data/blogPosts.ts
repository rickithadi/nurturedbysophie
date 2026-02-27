export interface BlogSection {
  heading?: string;
  body?: string;
  list?: string[];
  footnote?: string;
  image?: string;
  imageAlt?: string;
  ordered?: boolean;
  listStart?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  tag: 'Postnatal' | 'Prenatal';
  image: string;
  imageAlt: string;
  summary: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'golden-hour',
    title: 'The Golden Hour: Understanding the Physiology',
    category: 'Research',
    date: 'Feb 2026',
    author: 'Sophie Akther',
    tag: 'Postnatal',
    image: '/golden-hour-hero.jpg',
    imageAlt: 'Newborn baby held after birth',
    summary: 'The first 60 minutes after birth are a powerful physiological window — for bonding, hormonal regulation, and a foundation of lifelong wellbeing.',
    sections: [
      {
        body: 'The minutes and hours directly after a baby is born can be quite overwhelming. Everything seems to happen quickly: health checks, measurements, weigh-ins, and examinations.',
      },
      {
        body: `These things can often occur during an intense mixture of emotions by the parents, and thus, this period can often feel exceptionally rushed. Hence, the Golden Hour changes that. This concept has been adopted from adult trauma where the initial first hour of trauma management is considered as the <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5604187/" target="_blank" rel="noopener noreferrer" class="blog-link">golden hour</a>.`,
      },
      {
        body: `The "golden hour" in neonatology is a term used to describe the first 60 minutes after birth. This is a crucial time for the birth parent and baby to share their first intimate moments together and <a href="https://www.figo.org/blog/golden-hour-breastfeeding-and-its-lifelong-benefits#:~:text=It%20is%20during%20this%20hour,to%20develop%20a%20strong%20bond" target="_blank" rel="noopener noreferrer" class="blog-link">initiating an emotional bond with significant health benefits</a>.`,
      },
      {
        body: `Within this first hour, the first breastfeeding usually occurs. Breastfeeding during the golden hour helps the baby stabilise its <a href="https://www.breastfeeding.asn.au/resources/skin-skin-contact" target="_blank" rel="noopener noreferrer" class="blog-link">heart rate, breathing, and blood sugar. Additionally, from the skin-to-skin, it regulates baby's autonomic nervous system – lowering stress hormones and keeps them warm</a>. As for the birthing parent, the skin-to-skin contact stimulates the release of oxytocin, aka the "love hormone". Oxytocin promotes uterine contractions which can help <a href="https://www.southshorehealth.org/wellness/blog/understanding-golden-hour-background-benefits#:~:text=The%20Golden%20Hour%20can%20have,supply%20and%20breastfeeding%20success%20rates" target="_blank" rel="noopener noreferrer" class="blog-link">reduce postpartum bleeding, support both breastmilk supply and breastfeeding success rates, and reduce risk of postpartum depression, anxiety, and mood disorders</a>. Overall, strengthening their physiological ties.`,
      },
      {
        body: 'Skin-to-skin benefits are not exclusive to the Golden Hour or limited to the birth parent. Parents and partners can also engage in skin-to-skin contact beyond the first hour after birth. When they do, they experience increased bonding with their baby, along with positive benefits to their mental and emotional wellbeing.',
      },
      {
        body: `The Golden Hour is a <strong>golden standard</strong> here in Australia and is aimed to be implemented and inclusive of all births. Therefore, even after a caesarean section, as long as both birthing parent and newborn are medically stable – the golden hour with skin to skin occurs. The only time the Golden Hour may not and cannot be experienced would be due to medical reasons.`,
      },
      {
        body: 'The Golden Hour is more than just a beautiful moment – it is a physiologically powerful transition for both parents and baby. Through skin-to-skin contact, hormonal regulation, and early breastfeeding, this first hour supports stability, bonding, and long-term health outcomes. When protected, the Golden Hour becomes not just a practise, but a foundation for lifelong connection and wellbeing for all involved.',
      },
    ],
  },
  {
    slug: 'colostrum',
    title: 'Colostrum: When should I express it?',
    category: 'Education',
    date: 'Feb 2026',
    author: 'Sophie Akther',
    tag: 'Prenatal',
    image: '/colostrum-hero.jpg',
    imageAlt: 'Mother breastfeeding newborn baby',
    summary: 'Colostrum — often called "liquid gold" — is your baby\'s first nutrition. Learn what antenatal expressing is, who it\'s recommended for, and how to get started.',
    sections: [
      {
        body: `Colostrum is the first milk your breasts produce. Often called "liquid gold", it is thick, nutrient-dense, and rich in <a href="https://my.clevelandclinic.org/health/body/22434-colostrum" target="_blank" rel="noopener noreferrer" class="blog-link">antibodies, proteins, and growth factors that protect your baby from infection and support gut and immune development</a>.`,
      },
      {
        body: 'Your body begins producing colostrum during late pregnancy, and it continues in the first few days after birth before mature breast milk comes in.',
      },
      {
        body: `Most mothers will breastfeed and provide colostrum naturally after birth. However, in some situations, expressing colostrum before birth <strong>(called antenatal expressing)</strong> can be helpful.`,
      },
      {
        heading: 'What is Antenatal Expressing?',
        body: `Antenatal expressing means hand-expressing and collecting colostrum during late pregnancy <strong>(recommended from 36 weeks onwards)</strong> to store for your baby after birth. This can be reassuring and build confidence in some families, especially if there is a chance your baby may need extra feeding support in the first 24–48 hours. Having your own colostrum available may also reduce the need for formula supplementation.`,
      },
      {
        heading: 'When might it be recommended?',
        body: `Your midwife and/or obstetrician might suggest <a href="https://www.breastfeeding.asn.au/resources/antenatal-expressing" target="_blank" rel="noopener noreferrer" class="blog-link">antenatal expressing</a> if:`,
        list: [
          `<strong>You have diabetes during pregnancy</strong> — babies can have low blood sugar after birth and the extra colostrum can help keep their blood sugar stable.`,
          'Your baby has a condition that might make feeding more difficult – this could include a tongue tie, cleft lip/palate, or certain heart or neurological conditions. If your baby is diagnosed with one of these conditions before birth, having colostrum on hand can be helpful.',
        ],
      },
      {
        body: `The <a href="https://www.latrobe.edu.au/jlc/research/breastfeeding/dame/DAME-brochure-for-participants-Final.pdf" target="_blank" rel="noopener noreferrer" class="blog-link">large Australian DAME study found</a> that women with diabetes in otherwise low-risk pregnancy could safely express colostrum from 36 weeks, with no harm to their babies. Some babies were also less likely to require formula in the first 24 hours.`,
      },
      {
        heading: 'When should you avoid it?',
        body: `Always speak to your midwife or doctor before starting antenatal expressing. Antenatal expressing <a href="https://www.pregnancybirthbaby.org.au/antenatal-expression-of-colostrum" target="_blank" rel="noopener noreferrer" class="blog-link">may not be recommended if</a> you:`,
        list: [
          'Are at risk of premature labour',
          'Have placenta praevia',
          'Have been advised to avoid nipple stimulation*',
        ],
        footnote: '*Nipple stimulation can release oxytocin, which may trigger uterine contractions – which is also why it is generally only recommended from 36 weeks onwards in low-risk pregnancies.',
      },
      {
        heading: `Things to know before you start <a href="https://thewomens.r.worldssl.net/images/uploads/fact-sheets/Antenatal-expressing-expressing-breastmilk-during-pregnancy%C2%AD230503.pdf" target="_blank" rel="noopener noreferrer" class="blog-link text-base font-bodoni align-super text-xs">↗</a>`,
        ordered: true,
        list: [
          `Start <strong>no earlier than 36 weeks</strong>, unless advised otherwise.`,
          'Colostrum is thick and produced in small amounts – drops are normal.',
          'Hand expressing works best, compared to alternative techniques like a pump, at this stage.',
          'Not collecting much (or anything at all) is common and not a predictor of future milk supply.',
          'If collected*, store in sterile syringes or containers, labelled with your name, date, and time, and freeze.',
        ],
        footnote: '*Collect it onto a spoon, into a small cup, or use a syringe to draw up drops straight from the nipple.',
      },
      {
        heading: 'How to Hand Express',
        ordered: true,
        list: [
          'Wash your hands thoroughly.',
          'You may find it easier after a warm shower or gentle breast massage.',
          'You may prefer to ask your midwife or follow the instructions and image below:',
        ],
      },
      {
        image: '/hand-expressing-technique.jpg',
        imageAlt: 'Hand expressing technique diagram',
      },
      {
        ordered: true,
        listStart: 4,
        list: [
          'Place the pads of your thumb and forefinger opposite each other at the outer edge of your areola.',
          'Gently press back into your breast tissue (toward your chest wall) and compress your fingers together rhythmically.',
          'Rotate finger positions around the areola if needed.',
          'Express for up to 5 minutes per side, then switch breasts.',
        ],
        footnote: '*Swap hands, have your partner help you, or have a rest if needed.',
      },
      {
        body: 'Remember – do not worry if there is little or no breastmilk, and if you feel uncertain about expressing or it is causing any discomfort or contractions, stop and seek advice from your midwife or doctor.',
      },
      {
        body: 'Currently in Australia, each hospital will have different protocols and suggestions on antenatal expressing. So, if you\'re unsure, your midwife or doctor is the best person to guide you. And whether you collect drops, millilitres, or nothing at all – trust and believe in your own body that it is preparing in its own unique way!',
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
