import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Mountain, Users, MapPin, Star, ArrowRight, TrendingUp, Clock } from 'lucide-react';
import TrailCard from '../components/trail/TrailCard';
import { mockTrails } from '../data/mockTrails';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/trails?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const featuredTrails = mockTrails.slice(0, 3);
  const popularTrails = mockTrails.slice(3, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Your Next
              <span className="block text-emerald-300">Adventure</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto">
              Find and explore thousands of hiking, biking, and running trails around the world. 
              From easy family walks to challenging mountain peaks.
            </p>

            {/* Hero Search */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for trails, parks, or locations..."
                  className="w-full pl-12 pr-6 py-4 text-lg rounded-full border-0 text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-emerald-300 outline-none shadow-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-8 w-8 text-emerald-300" />
                </div>
                <div className="text-3xl font-bold">50,000+</div>
                <div className="text-emerald-200">Trails Mapped</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-emerald-300" />
                </div>
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-emerald-200">Active Users</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-emerald-300" />
                </div>
                <div className="text-3xl font-bold">1.5M+</div>
                <div className="text-emerald-200">Trail Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trails */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked trails that offer extraordinary experiences for adventurers of all levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredTrails.map((trail) => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/trails"
              className="inline-flex items-center px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-colors"
            >
              Explore All Trails
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trail Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect trail for your preferred outdoor activity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: 'Hiking',
                icon: Mountain,
                description: 'Scenic mountain trails and forest paths',
                color: 'from-emerald-500 to-emerald-600',
                count: '25,000+'
              },
              {
                type: 'Biking',
                icon: TrendingUp,
                description: 'Mountain biking and cycling routes',
                color: 'from-blue-500 to-blue-600',
                count: '12,000+'
              },
              {
                type: 'Running',
                icon: Clock,
                description: 'Urban runs and trail running routes',
                color: 'from-purple-500 to-purple-600',
                count: '8,000+'
              },
              {
                type: 'Walking',
                icon: MapPin,
                description: 'Easy walks and nature strolls',
                color: 'from-orange-500 to-orange-600',
                count: '15,000+'
              }
            ].map((category) => (
              <Link
                key={category.type}
                to={`/trails?type=${category.type.toLowerCase()}`}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-full mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.type}</h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <span className="text-sm font-medium text-emerald-600">{category.count} trails</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Trails */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trending This Week
            </h2>
            <p className="text-xl text-gray-600">
              Most popular trails among our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTrails.map((trail) => (
              <TrailCard key={trail.id} trail={trail} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Adventurers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'Colorado',
                avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
                quote: 'TrailQuest helped me discover amazing trails I never knew existed. The detailed descriptions and photos are incredibly helpful!',
                rating: 5
              },
              {
                name: 'Mike Chen',
                location: 'California',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
                quote: 'As an avid mountain biker, I love how easy it is to find trails that match my skill level. The community reviews are spot-on.',
                rating: 5
              },
              {
                name: 'Emily Rodriguez',
                location: 'Washington',
                avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
                quote: 'Perfect for planning family adventures. The difficulty ratings help me choose trails that work for everyone.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join millions of outdoor enthusiasts and start exploring today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="px-8 py-3 bg-white text-emerald-600 font-medium rounded-full hover:bg-gray-50 transition-colors"
            >
              Sign Up Free
            </Link>
            <Link
              to="/trails"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Browse Trails
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;