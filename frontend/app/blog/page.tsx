"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogs";
import { formatDate } from "@/lib/utils";
import { Search, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Marriage Biodata",
    "Marathi",
    "Design",
    "Family",
    "Modern Matrimony",
    "Tips",
  ];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCat = selectedCategory === "All" || post.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.marathiTitle && post.marathiTitle.includes(searchQuery)) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FCFAF6] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Matrimony Guides & Insights • विवाह ब्लॉग</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serifDevanagari text-wine-950">
            विवाहपत्रिका ब्लॉग आणि मार्गदर्शन
          </h1>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Expert advice on writing respectful partner expectations, selecting photos, understanding horoscope details, and cultural etiquette.
          </p>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-cream-border shadow-card-soft">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-wine-800 text-white font-bold shadow-xs"
                    : "bg-cream-surface text-charcoal-700 hover:bg-cream-muted border border-cream-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-400" />
            <input
              type="text"
              placeholder="Search articles & topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-xl border border-cream-border bg-cream-surface/50 focus:border-wine-700 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-cream-border hover:border-gold-400 shadow-card-soft hover:shadow-royal transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Cover Header */}
                <div
                  className="h-48 w-full p-6 flex flex-col justify-between relative overflow-hidden"
                  style={{ background: post.coverGradient }}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-[11px] font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-white/90">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  <div className="text-white/80 text-xs">
                    {formatDate(post.date)} • By {post.author}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h2 className="text-lg font-bold text-wine-950 group-hover:text-wine-700 transition-colors font-serif leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {post.marathiTitle && (
                    <p className="text-xs font-semibold text-gold-800 font-serifDevanagari mt-1 line-clamp-1">
                      {post.marathiTitle}
                    </p>
                  )}

                  <p className="text-xs text-charcoal-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 bg-cream-surface rounded text-charcoal-600 border border-cream-border"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-wine-800 hover:text-wine-950 group-hover:underline"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
