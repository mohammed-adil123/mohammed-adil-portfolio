import React from 'react';
import type { CategoryType } from '../../types';
import { Search, Terminal, Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: CategoryType[];
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  projectCounts: Record<CategoryType, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  projectCounts
}) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Project categories">
        <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted mr-1 hidden sm:flex">
          <Filter className="w-3.5 h-3.5 text-accent-blue" />
          <span>Filter:</span>
        </div>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          const count = projectCounts[category] || 0;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              role="tab"
              aria-selected={isSelected}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                isSelected
                  ? 'bg-accent-blue text-white shadow-md shadow-accent-blue/20 font-semibold'
                  : 'bg-surface-elevated/70 text-text-secondary hover:text-text-primary hover:bg-surface-elevated border border-border-subtle'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : 'bg-surface-base text-text-muted'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Terminal grep search input */}
      <div className="relative min-w-[260px] md:w-72">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
          <Terminal className="w-3.5 h-3.5 text-accent-blue" />
          <span className="text-xs font-mono ml-1 text-text-muted/60">grep -i</span>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by tech or keyword..."
          aria-label="Filter projects by technology or keyword"
          className="w-full pl-24 pr-8 py-2 rounded-xl bg-surface-elevated/70 border border-border-subtle text-xs text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/60 font-mono transition-all"
        />
        {searchQuery ? (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-text-muted hover:text-text-primary"
            aria-label="Clear search"
          >
            ×
          </button>
        ) : (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-text-muted">
            <Search className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </div>
  );
};
