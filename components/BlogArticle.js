import Image from 'next/image';

const blogPostsBySlug = {
  'customs-documents-nepal-export': {
    slug: 'customs-documents-nepal-export',
    category: 'Customs',
    language: 'नेपाली + English',
    title: 'नेपालबाट Export गर्दा Customs कागजपत्र के-के चाहिन्छ? (Step-by-step)',
    date: '2024-10-15',
    readTime: '6 min read',
    image: '/img/depex.jpg',
    sections: [
      {
        heading: 'कागजपत्र बुझौं (Documents Overview)',
        body: [
          'नेपालबाट international export गर्दा customs clearance लाई support गर्ने मुख्य कागजपत्रहरु चाहिन्छ। यस guide ले practical checklist दिएको छ।',
          'Product प्रकार, गन्तव्य देश, र courier/billing method अनुसार required items फरक पर्न सक्छ—त्यसैले हामी तपाईंको shipment अनुसार checklist तयार गर्छौं।',
        ],
      },
      {
        heading: 'Common Checklist',
        body: [
          '1) Commercial Invoice (व्यापार बिल) — item, quantity, price, currency, HS/description सही हुनुपर्छ।',
          '2) Packing List — carton count, weight/measurement, item-wise विवरण।',
          '3) Shipping/Export Instructions — sender/receiver details, incoterms (यदि लागू), dispatch/pickup info।',
          '4) Product Documents — certificate/spec sheet (आवश्यक भएमा)।',
          '5) Copy of ID/Business Registration (केही case मा)।',
        ],
      },
      {
        heading: 'Common mistakes Nepali shippers ले बारम्बार गर्ने',
        body: [
          '• Description धेरै vague राख्नु (उदाहरण: “Gift item” मात्रै) → customs clarification माग्न सक्छ।',
          '• Invoice र parcel contents mismatch → delay risk।',
          '• Carton/weight details नदिइदिनु → packing list mismatch/clearance issue।',
          '• HS code गलत → duty/tax गलत पर्न सक्छ।',
        ],
      },
      {
        heading: 'Quick Advice',
        body: [
          'Shipment पठाउनु अघि invoice र packing list cross-check गर्नुहोस्।',
          'HS code/description unclear भए हामीसँग confirm गर्नुहोस् ताकि customs मा confusion नहोस्।',
        ],
      },
    ],
  },
  'packing-fragile-items-nepal': {
    slug: 'packing-fragile-items-nepal',
    category: 'Packing',
    language: 'English',
    title: 'How to Pack Fragile Items for International Shipping (Nepali Shippers’ Checklist)',
    date: '2024-09-28',
    readTime: '5 min read',
    image: '/img/shipment1.jpg',
    sections: [
      {
        heading: 'Before you pack (Prep)',
        body: [
          'Fragile items still face dropping, stacking, and compression during international transit.',
          'Use sturdy cartons (double-wall if possible) and avoid weak/reused boxes without reinforcement.',
        ],
      },
      {
        heading: 'The 5-step checklist',
        body: [
          '1) Wrap each item individually (bubble wrap + padding).',
          '2) Fill empty spaces (foam/paper padding) so items cannot move.',
          '3) Seal with strong tape (reinforce corners and edges).',
          '4) Add “FRAGILE” labels and arrows if allowed by the carrier.',
          '5) Keep tracking/payment info protected—inside the carton too.',
        ],
      },
      {
        heading: 'Why this matters',
        body: [
          'Most damage happens when items shift. Proper packing distributes force and prevents internal contact.',
        ],
      },
    ],
  },
  'air-vs-sea-nepal': {
    slug: 'air-vs-sea-nepal',
    category: 'Logistics',
    language: 'नेपाली',
    title: 'Air vs Sea: कुन Transport Nepal Export का लागि राम्रो? Budget vs Time',
    date: '2024-08-20',
    readTime: '7 min read',
    image: '/img/plane.jpg',
    sections: [
      {
        heading: 'छोटो उत्तर (Quick Comparison)',
        body: [
          'Air: छिटो delivery चाहिन्छ भने। Sea: bulk/weight बढी र budget priority छ भने।',
          'तर actual transit time र total landing cost route/state अनुसार फरक पर्छ। हामी shipment details हेरेर recommendation दिन्छौं।',
        ],
      },
      {
        heading: 'Air कहिले छान्ने?',
        body: [
          '• Urgent documents/time-sensitive goods',
          '• High-value/smaller shipment',
          '• Temperature-sensitive/fragile handling expectation',
        ],
      },
      {
        heading: 'Sea कहिले छान्ने?',
        body: [
          '• Weight/cartons धेरै',
          '• Timeline flexible',
          '• Bulk cargo/commercial shipments',
        ],
      },
      {
        heading: 'Practical tip',
        body: [
          'हामी “ट्रांजिट टाइम + customs clearance + total landing cost” समग्र रूपमा तुलना गर्छौं। कहिलेकाहीँ Sea delay ले real cost जाँच्दा Air competitive हुन सक्छ।',
        ],
      },
    ],
  },
};

export default function BlogArticle({ slug }) {
  const post = blogPostsBySlug[slug];

  if (!post) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Article not found</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">Invalid blog slug.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white dark:bg-gray-950/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <div className="relative h-72">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="blog-category bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase">
                  {post.category}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <i className="far fa-calendar" />{' '}
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <i className="far fa-clock" /> {post.readTime}
              </span>
              <span className="font-semibold text-primary-600 dark:text-primary-300">{post.language}</span>
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 space-y-8">
              {post.sections.map((sec, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{sec.heading}</h2>
                  <div className="space-y-3">
                    {sec.body.map((p, pIdx) => (
                      <p key={pIdx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold">Want a customized checklist?</div>
                  <div className="text-white/90 mt-1">Send your shipment details—हामी तयार गरिदिन्छौं।</div>
                </div>
                <a href="#contact" className="btn btn-light">
                  <i className="fas fa-paper-plane mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

