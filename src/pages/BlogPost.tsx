import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getBlogPost } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <p className="font-bodoni text-forest/60 text-lg mb-4">Post not found.</p>
          <button
            onClick={() => navigate('/#journal')}
            className="font-bodoni text-sm uppercase tracking-widest text-forest hover:text-sage transition-colors"
          >
            ← Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream text-forest antialiased">
      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => navigate('/#journal')}
          className="group inline-flex items-center gap-2 font-bodoni text-sm uppercase tracking-widest text-forest/60 hover:text-forest transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Blog
        </button>
      </div>

      {/* Hero image */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <div className="aspect-[16/7] rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title block */}
      <div className="max-w-3xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-4 mb-4 text-forest/50 text-sm font-bodoni">
          <span className="uppercase tracking-widest">{post.category}</span>
          <span className="w-1 h-1 bg-forest/30 rounded-full"></span>
          <span>{post.date}</span>
          <span className="w-1 h-1 bg-forest/30 rounded-full"></span>
          <span>Written by {post.author}</span>
        </div>
        <h1 className="font-playfair text-3xl md:text-5xl text-forest leading-tight tracking-tight font-medium">
          {post.title}
        </h1>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="space-y-6">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-playfair text-xl md:text-2xl text-forest font-semibold mt-10 mb-3">
                  {section.heading}
                </h2>
              )}
              {section.body && (
                <p className="font-helvetica text-forest/80 text-lg leading-relaxed">
                  {section.body}
                </p>
              )}
              {section.list && (
                section.ordered ? (
                  <ol start={section.listStart ?? 1} className="mt-3 space-y-2 list-none">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 font-helvetica text-forest/80 text-lg leading-relaxed">
                        <span className="flex-shrink-0 font-helvetica text-sage">
                          {(section.listStart ?? 1) + j}.
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-3 space-y-2">
                    {section.list.map((item, j) => (
                      <li key={j} className="flex gap-3 font-helvetica text-forest/80 text-lg leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              )}
              {section.footnote && (
                <p className="mt-3 font-helvetica text-forest/50 text-sm leading-relaxed italic">
                  {section.footnote}
                </p>
              )}
              {section.image && (
                <img
                  src={section.image}
                  alt={section.imageAlt ?? ''}
                  className="w-full rounded-xl my-4"
                />
              )}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
