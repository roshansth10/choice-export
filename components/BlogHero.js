import Image from 'next/image';

export default function BlogHero() {
  return (
    <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary-100/40 dark:from-primary-900/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-accent-100/40 dark:from-accent-900/40 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700">
              <span className="w-2 h-2 rounded-full bg-primary-600" />
              <span className="text-sm text-gray-700 dark:text-gray-200 font-semibold">
                Blog • Nepal to World
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Logistics Knowledge,
              <span className="gradient-text"> Nepali Insight</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Customs, shipping, packing, और documentation बारे practical tips—English पनि, Nepali पनि—नेपाली audience का लागि।
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/blog" className="btn btn-primary">
                <i className="fas fa-book-open mr-2" />
                Read Latest Articles
              </a>
              <a href="#contact" className="btn btn-outline">
                <i className="fas fa-phone-alt mr-2" />
                Free Consultation
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl md:shadow-2xl h-72 md:h-96">
              <Image
                src="/img/shipment1.jpg"
                alt="Shipping and logistics"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-effect rounded-2xl p-5">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Info</div>
                      <div className="text-xs text-gray-200/90">Tips</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">Docs</div>
                      <div className="text-xs text-gray-200/90">Guide</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">How</div>
                      <div className="text-xs text-gray-200/90">To</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

