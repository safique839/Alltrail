import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import TrailCard from '../components/trail/TrailCard';
import TrailFilters from '../components/trail/TrailFilters';
import { mockTrails } from '../data/mockTrails';

const TrailsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const [filters, setFilters] = useState({
    location: '',
    difficulty: '',
    trailType: searchParams.get('type') || '',
    maxDistance: '',
    minRating: ''
  });

  const searchQuery = searchParams.get('search') || '';

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      difficulty: '',
      trailType: '',
      maxDistance: '',
      minRating: ''
    });
  };

  const filteredTrails = useMemo(() => {
    return mockTrails.filter(trail => {
      // Search query filter
      if (searchQuery && !trail.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !trail.location.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !trail.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Location filter
      if (filters.location && !trail.location.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty && trail.difficulty !== filters.difficulty) {
        return false;
      }

      // Trail type filter
      if (filters.trailType && trail.trailType !== filters.trailType) {
        return false;
      }

      // Max distance filter
      if (filters.maxDistance && trail.distance > parseFloat(filters.maxDistance)) {
        return false;
      }

      // Min rating filter
      if (filters.minRating && trail.rating < parseFloat(filters.minRating)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Explore Trails'}
          </h1>
          <p className="text-gray-600">
            {filteredTrails.length} trails found
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80 xl:w-96">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4 hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filters</span>
            </button>

            {/* Filters */}
            <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
              <TrailFilters
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="flex items-center justify-between mb-6 bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Showing {filteredTrails.length} results
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Trail Grid */}
            {filteredTrails.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredTrails.map((trail) => (
                  <TrailCard key={trail.id} trail={trail} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.084-2.343" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No trails found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms to find more trails.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailsPage;