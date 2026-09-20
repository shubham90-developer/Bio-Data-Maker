import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BLOG_POSTS } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar, User, Share2, Sparkles, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | विवाहपत्रिका",
    };
  }

  return {
    title: `${post.title} | विवाहपत्रिका ब्लॉग`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-wine-900 hover:text-wine-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles (सर्व लेख)</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-wine-100 text-wine-900 font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-charcoal-500">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="text-charcoal-300">•</span>
            <span className="flex items-center gap-1 text-charcoal-500">
              <Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}
            </span>
            <span className="text-charcoal-300">•</span>
            <span className="flex items-center gap-1 text-charcoal-500">
              <User className="w-3.5 h-3.5" /> {post.author}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-wine-950 leading-tight">
            {post.title}
          </h1>

          {post.marathiTitle && (
            <p className="text-lg sm:text-xl font-semibold text-gold-800 font-serifDevanagari">
              {post.marathiTitle}
            </p>
          )}

          {/* Featured Decorative Cover */}
          <div
            className="w-full h-48 sm:h-64 rounded-3xl p-8 flex items-end relative overflow-hidden shadow-card-soft border border-black/10"
            style={{ background: post.coverGradient }}
          >
            <p className="text-white/90 text-sm sm:text-base font-medium max-w-xl italic drop-shadow-sm">
              "{post.excerpt}"
            </p>
          </div>
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-cream-border shadow-card-soft space-y-6 text-charcoal-800 leading-relaxed font-devanagari text-base sm:text-lg">
          {post.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Key Insight Box */}
          <div className="my-8 p-6 rounded-2xl bg-[#FAF4E6] border border-[#E7D6A7] space-y-2">
            <div className="flex items-center gap-2 font-bold text-wine-900 text-sm">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span>महत्त्वाची टीप (Key Recommendation)</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              बायोडाटा बनवताना माहितीमध्ये पारदर्शकता ठेवावी. शिक्षण, नोकरी, कुंडली तपशील व कौटुंबिक पार्श्वभूमी अचूक दिल्याने सुरुवातीसच दोन्ही कुटुंबांमध्ये विश्वास निर्माण होतो.
            </p>
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-cream-border flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-charcoal-500">विषय / Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-cream-surface text-charcoal-700 rounded-lg border border-cream-border"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Embedded CTA */}
        <div className="bg-gradient-to-r from-wine-800 to-wine-950 text-white rounded-3xl p-8 sm:p-10 shadow-royal flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-serifDevanagari">
              आता तुमचा बायोडाटा तयार करा
            </h3>
            <p className="text-xs sm:text-sm text-cream-muted max-w-md">
              Apply these insights immediately using our 12+ pre-formatted luxury templates.
            </p>
          </div>

          <Link
            href="/create-biodata"
            className="px-6 py-3.5 rounded-xl font-bold text-wine-950 bg-gradient-to-r from-gold-300 to-gold-500 hover:from-gold-400 hover:to-gold-600 shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <span>Create My Biodata</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Related Articles */}
        <div className="space-y-4 pt-6">
          <h3 className="text-xl font-bold text-wine-950 font-serif">
            Related Articles • संबंधित लेख
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-4 bg-white rounded-2xl border border-cream-border hover:border-gold-400 shadow-card-soft transition-all group"
              >
                <span className="text-[10px] font-bold text-wine-800 uppercase">
                  {rel.category}
                </span>
                <h4 className="text-xs font-bold text-charcoal-800 group-hover:text-wine-800 transition-colors line-clamp-2 mt-1">
                  {rel.title}
                </h4>
                <span className="text-[10px] text-charcoal-400 mt-2 block">
                  {rel.readTime}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
