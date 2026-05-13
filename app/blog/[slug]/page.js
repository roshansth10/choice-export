import BlogArticle from '@/components/BlogArticle';

export default function BlogSlugPage({ params }) {
  return (
    <div className="min-h-screen">
      <BlogArticle slug={params.slug} />
    </div>
  );
}

