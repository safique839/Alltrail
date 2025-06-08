import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, TrendingUp, Star, Heart } from 'lucide-react';
import { Trail } from '../../types/trail';

interface TrailCardProps {
  trail: Trail;
  showSaveButton?: boolean;
}

const TrailCard: React.FC<TrailCardProps> = ({ trail, showSaveButton = true }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-orange-600 bg-orange-100';
      case 'Expert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTrailTypeColor = (type: string) => {
    switch (type) {
      case 'Hiking': return 'text-emerald-600 bg-emerald-100';
      case 'Biking': return 'text-blue-600 bg-blue-100';
      case 'Running': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={trail.images[0]}
          alt={trail.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(trail.difficulty)}`}>
            {trail.difficulty}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTrailTypeColor(trail.trailType)}`}>
            {trail.trailType}
          </span>
        </div>
        {showSaveButton && (
          <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <Link to={`/trail/${trail.id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors line-clamp-1">
              {trail.name}
            </h3>
          </Link>
          <div className="flex items-center space-x-1 ml-2 flex-shrink-0">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{trail.rating}</span>
            <span className="text-sm text-gray-500">({trail.reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <span className="text-sm line-clamp-1">{trail.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="font-medium">{trail.distance} mi</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>{trail.elevationGain} ft</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{trail.estimatedTime}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {trail.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {trail.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
          {trail.features.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{trail.features.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrailCard;