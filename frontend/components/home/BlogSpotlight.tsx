import React from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const BlogSpotlight: React.FC = () => {
  const featuredArticles = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF6] border-t border-[#E0D5C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-wine-800 uppercase tracking-widest block mb-2 font-sans">
              Expert Advice & Culture • विवाह मार्गदर्शन
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serifDevanagari text-wine-950">
              नवीनतम लेख आणि टिप्स
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-2">
              Learn how to present your biodata respectfully, avoid common pitfalls, and understand traditions.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-wine-800 hover:text-wine-950 group"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-cream-border hover:border-gold-400 shadow-card-soft hover:shadow-royal transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Visual Cover Gradient */}
                <div
                  className="h-44 w-full p-6 flex flex-col justify-between relative overflow-hidden"
                  style={{ background: article.coverGradient }}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-[11px] font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-white/90">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <div className="text-white/80 text-xs">
                    {formatDate(article.date)}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-wine-950 group-hover:text-wine-700 transition-colors font-serif leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  {article.marathiTitle && (
                    <p className="text-xs font-semibold text-gold-800 font-serifDevanagari mt-1 line-clamp-1">
                      {article.marathiTitle}
                    </p>
                  )}
                  <p className="text-xs text-charcoal-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-wine-800 hover:text-wine-950 group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-wine-800 hover:text-wine-950"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
