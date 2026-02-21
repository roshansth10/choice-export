import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      category: 'Export',
      title: 'Understanding Customs Documentation in 2023',
      date: 'June 15, 2023',
      readTime: '5 min read',
      description: 'A comprehensive guide to the essential documents required for smooth customs clearance in international trade.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      category: 'Logistics',
      title: '5 Tips for Efficient International Shipping',
      date: 'May 28, 2023',
      readTime: '4 min read',
      description: 'Learn how to streamline your international shipping process to save time and reduce costs.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      category: 'Packing',
      title: 'Best Practices for Packing Fragile Items',
      date: 'April 10, 2023',
      readTime: '6 min read',
      description: 'Professional tips on how to pack fragile and valuable items to prevent damage during transit.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Our Blog</span>
          <h2 className="section-title">Latest News & Insights</h2>
          <p className="section-subtitle dark:text-gray-300">Stay updated with the latest trends in logistics and export</p>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="blog-image relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
                <span className="blog-category absolute top-5 left-5 bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase">
                  {post.category}
                </span>
              </div>
              <div className="blog-content p-6">
                <div className="blog-meta flex gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <i className="far fa-calendar"></i> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="far fa-clock"></i> {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{post.description}</p>
                <a href="#" className="text-primary-600 dark:text-primary-400 font-semibold inline-flex items-center gap-2 hover:text-secondary-500">
                  Read Full Article <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-button text-center">
          <a href="#" className="btn btn-primary">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
