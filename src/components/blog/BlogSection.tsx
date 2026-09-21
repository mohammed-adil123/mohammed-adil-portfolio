import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../../data/portfolioData';
import type { Article } from '../../types';
import { 
  Terminal, Search, BookOpen, Clock, Calendar, 
  ArrowUpRight, Sparkles, X, ChevronRight, Code 
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const categories = ['All', 'Databases & Systems', 'Machine Learning', 'Computer Vision', 'Software Engineering'];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCat = selectedCategory === 'All' || article.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.synopsis.toLowerCase().includes(query) ||
        article.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  return (
    <section id="blog" className="py-24 relative border-t border-border-subtle/40">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>// TECHNICAL WRITING &amp; RFCs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary tracking-tight">
            Engineering Blog &amp; Notes
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-2xl">
            Technical deep-dives into 3NF relational normalization, machine learning regression, computer vision segmentation, and software QA practices.
          </p>
        </div>

        {/* Featured Deep Dive Article */}
        <div className="glass-panel p-6 sm:p-8 rounded-xl mb-12 border-accent-cyan/30 bg-gradient-to-br from-surface-elevated/70 via-surface-elevated/40 to-surface-base group">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-accent-cyan/15 text-accent-cyan text-[11px] font-mono border border-accent-cyan/30 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              FEATURED DEEP DIVE
            </span>
            <span className="text-xs font-mono text-text-muted flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {featuredArticle.date}
            </span>
            <span className="text-xs font-mono text-text-muted flex items-center gap-1">
              <Clock className="w-3 h-3" /> {featuredArticle.readTime}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h3 
                onClick={() => setSelectedArticle(featuredArticle)}
                className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors cursor-pointer"
              >
                {featuredArticle.title}
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
                {featuredArticle.synopsis}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {featuredArticle.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-surface-base text-text-muted border border-border-subtle">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedArticle(featuredArticle)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan hover:brightness-110 text-surface-base font-semibold text-xs font-mono transition-all shadow-[0_0_15px_rgba(6,182,212,0.35)]"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Full Analysis</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Code preview window */}
            {featuredArticle.codeSnippet && (
              <div className="lg:col-span-5 rounded-xl border border-border-subtle bg-[#0a0d14] overflow-hidden">
                <div className="px-4 py-2 bg-surface-elevated/70 border-b border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span className="ml-2 text-text-secondary">3nf_schema.sql</span>
                  </div>
                  <span className="text-accent-cyan">SQL Server</span>
                </div>
                <pre className="p-4 text-xs font-mono text-text-secondary overflow-x-auto leading-relaxed">
                  <code>{featuredArticle.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent-cyan text-surface-base font-semibold shadow-sm'
                    : 'bg-surface-elevated/70 text-text-secondary hover:text-text-primary border border-border-subtle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by tag..."
              aria-label="Search articles by title or tag"
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-surface-elevated/70 border border-border-subtle text-xs text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-cyan/60 font-mono transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="glass-panel p-6 rounded-xl flex flex-col justify-between hover:border-accent-cyan/40 transition-all duration-200 group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-text-muted">
                  <span className="text-accent-cyan font-medium">{article.category}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h4 className="text-lg font-display font-semibold text-text-primary group-hover:text-accent-cyan transition-colors mb-2 leading-snug">
                  {article.title}
                </h4>

                <p className="text-text-secondary text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-muted border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-border-subtle/60 flex items-center justify-between text-xs font-mono text-text-muted group-hover:text-accent-cyan">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1 font-medium">
                    Read note <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-surface-base/80 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex justify-center animate-fadeIn"
        >
          <div className="relative w-full max-w-3xl bg-surface-base border border-border-subtle rounded-xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 bg-surface-base/90 backdrop-blur-md border-b border-border-subtle flex items-center justify-between">
              <span className="text-xs font-mono text-accent-cyan">
                {selectedArticle.category}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article modal"
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-text-muted mb-2">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-4">
                  {selectedArticle.title}
                </h2>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2.5 py-0.5 rounded-lg bg-surface-elevated text-text-muted border border-border-subtle">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel p-6 rounded-xl text-sm sm:text-base text-text-secondary leading-relaxed space-y-4">
                <p>{selectedArticle.synopsis}</p>
                <p>{selectedArticle.excerpt}</p>
              </div>

              {selectedArticle.codeSnippet && (
                <div className="rounded-xl border border-border-subtle bg-[#0a0d14] overflow-hidden">
                  <div className="px-4 py-2 bg-surface-elevated/70 border-b border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-accent-cyan" />
                      Code Architecture
                    </span>
                    <span className="text-accent-cyan">{selectedArticle.codeSnippet.language}</span>
                  </div>
                  <pre className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-text-secondary overflow-x-auto leading-relaxed">
                    <code>{selectedArticle.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-surface-base/90 backdrop-blur-md border-t border-border-subtle flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-lg bg-surface-elevated text-xs font-mono text-text-primary border border-border-subtle hover:border-border-muted"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
