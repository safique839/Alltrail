import React from 'react';
import { Filter, MapPin, Mountain, Clock, TrendingUp } from 'lucide-react';

interface TrailFiltersProps {
  filters: {
    location: string;
    difficulty: string;
    trailType: string;
    maxDistance: string;
    minRating: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onClearFilters: () => void;
}

const TrailFilters: React.FC<TrailFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters
}) => {
  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Location */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MapPin className="h-4 w-4 mr-2" />
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
          >
            <option value="">All Locations</option>
            <option value="california">California</option>
            <option value="utah">Utah</option>
            <option value="colorado">Colorado</option>
            <option value="washington">Washington</option>
            <option value="new-york">New York</option>
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Mountain className="h-4 w-4 mr-2" />
            Difficulty
          </label>
          <select
            value={filters.difficulty}
            onChange={(e) => onFilterChange('difficulty', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        {/* Trail Type */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Trail Type
          </label>
          <div className="space-y-2">
            {['Hiking', 'Biking', 'Running', 'Walking'].map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="trailType"
                  value={type}
                  checked={filters.trailType === type}
                  onChange={(e) => onFilterChange('trailType', e.target.value)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{type}</span>
              </label>
            ))}
            <label className="flex items-center">
              <input
                type="radio"
                name="trailType"
                value=""
                checked={filters.trailType === ''}
                onChange={(e) => onFilterChange('trailType', e.target.value)}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">All Types</span>
            </label>
          </div>
        </div>

        {/* Max Distance */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Clock className="h-4 w-4 mr-2" />
            Max Distance
          </label>
          <select
            value={filters.maxDistance}
            onChange={(e) => onFilterChange('maxDistance', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"
          >
            <option value="">Any Distance</option>
            <option value="2">Under 2 miles</option>
            <option value="5">Under 5 miles</option>
            <option value="10">Under 10 miles</option>
            <option value="20">Under 20 miles</option>
          </select>
        </div>

        {/* Minimum Rating */}
        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">
            Minimum Rating
          </label>
          <div className="space-y-2">
            {['4.5', '4.0', '3.5', '3.0'].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="radio"
                  name="minRating"
                  value={rating}
                  checked={filters.minRating === rating}
                  onChange={(e) => onFilterChange('minRating', e.target.value)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{rating}+ stars</span>
              </label>
            ))}
            <label className="flex items-center">
              <input
                type="radio"
                name="minRating"
                value=""
                checked={filters.minRating === ''}
                onChange={(e) => onFilterChange('minRating', e.target.value)}
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Any Rating</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailFilters;