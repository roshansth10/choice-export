import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'customs-documents-nepal-export',
    category: 'Customs',
    language: 'नेपाली + English',
    title: 'नेपालबाट Export गर्दा Customs कागजपत्र के-के चाहिन्छ? (Step-by-step)',
    excerpt: 'Export shipment छ? Customs clearance सहज बनाउन आवश्यक कागजपत्र, सही विवरण, र common mistakes बारे सरल गाइड।',
    date: '2024-10-15',
    readTime: '6 min read',
    image: '/img/depex.jpg',
  },
  {
    slug: 'packing-fragile-items-nepal',
    category: 'Packing',
    language: 'English',
    title: 'How to Pack Fragile Items for International Shipping (Nepali Shippers’ Checklist)',
    excerpt: 'Carton selection, cushioning, labeling, and damage prevention—practical packing steps you can follow before pickup.',
    date: '2024-09-28',
    readTime: '5 min read',
    image: '/img/shipment1.jpg',
  },
  {
    slug: 'air-vs-sea-nepal',
    category: 'Logistics',
    language: 'नेपाली',
    title: 'Air vs Sea: कुन Transport Nepal Export का लागि राम्रो? Budget vs Time',
    excerpt: 'समय र लागतको आधारमा Air वा Sea मध्ये कसरी सही छनोट गर्ने—हाम्रा real-world examples सहित।',
    date: '2024-08-20',
    readTime: '7 min read',
    image: '/img/plane.jpg',
  },
];

export default function BlogList() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950/20">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Our Blog</span>
          <h2 className="section-title">Latest News & Practical Guides</h2>
          <p className="section-subtitle dark:text-gray-300">
            नेपालबाट shipment पठाउने सबैलाई मिल्ने practical tips—English पनि, नेपाली पनि।
          </p>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="blog-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="blog-image relative h-64 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
                <span className="blog-category absolute top-5 left-5 bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase">
                  {post.category}
                </span>
              </div>

              <div className="blog-content p-6">
                <div className="blog-meta flex gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <i className="far fa-calendar" />{' '}
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="far fa-clock" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-300">
                    {post.language}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 dark:text-primary-400 font-semibold inline-flex items-center gap-2 hover:text-secondary-500"
                  >
                    Read Full Article <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-button text-center">
          <Link href="/contact" className="btn btn-primary">
            <i className="fas fa-shipping-fast mr-2" />
            Need Help? Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

