import React, { useState } from 'react';
import { User, MapPin, Calendar, Star, Heart, Camera, Settings, Trophy, Mountain, TrendingUp } from 'lucide-react';
import TrailCard from '../components/trail/TrailCard';
import { mockTrails } from '../data/mockTrails';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'saved' | 'completed' | 'reviews'>('saved');

  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    location: 'Denver, Colorado',
    joinDate: 'March 2023',
    stats: {
      trailsCompleted: 47,
      totalDistance: 312.5,
      totalElevation: 45680,
      reviewsWritten: 23
    }
  };

  const savedTrails = mockTrails.slice(0, 3);
  const completedTrails = mockTrails.slice(2, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-6 -mt-16">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-2 right-2 p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                    <div className="flex items-center text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Joined {user.joinDate}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors mt-4 sm:mt-0">
                    <Settings className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Trophy className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {user.stats.trailsCompleted}
            </div>
            <div className="text-sm text-gray-600">Trails Completed</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Mountain className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {user.stats.totalDistance}
            </div>
            <div className="text-sm text-gray-600">Miles Hiked</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {user.stats.totalElevation.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Feet Climbed</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {user.stats.reviewsWritten}
            </div>
            <div className="text-sm text-gray-600">Reviews Written</div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'saved', label: 'Saved Trails', icon: Heart, count: savedTrails.length },
                { id: 'completed', label: 'Completed', icon: Trophy, count: completedTrails.length },
                { id: 'reviews', label: 'Reviews', icon: Star, count: user.stats.reviewsWritten }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs">
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'saved' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Saved Trails</h2>
                  <p className="text-gray-600">Trails you want to explore</p>
                </div>
                
                {savedTrails.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {savedTrails.map((trail) => (
                      <TrailCard key={trail.id} trail={trail} showSaveButton={false} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No saved trails yet</h3>
                    <p className="text-gray-600 mb-6">Start exploring and save trails you want to hike</p>
                    <a
                      href="/trails"
                      className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Discover Trails
                    </a>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'completed' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Completed Trails</h2>
                  <p className="text-gray-600">Trails you've conquered</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedTrails.map((trail) => (
                    <div key={trail.id} className="relative">
                      <TrailCard trail={trail} showSaveButton={false} />
                      <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        ✓ Completed
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Your Reviews</h2>
                  <p className="text-gray-600">Help others discover great trails</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      trailName: "Angel's Landing Trail",
                      rating: 5,
                      date: '2024-01-15',
                      title: 'Absolutely breathtaking!',
                      content: 'This trail is challenging but so worth it. The chains section was intimidating at first, but totally manageable...'
                    },
                    {
                      trailName: 'Emerald Lake Trail',
                      rating: 4,
                      date: '2024-01-08',
                      title: 'Perfect family hike',
                      content: 'Great trail for beginners. The lake views are stunning and the trail is well-maintained...'
                    }
                  ].map((review, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.trailName}</h3>
                          <div className="flex items-center mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                            <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                          </div>
                        </div>
                        <button className="text-emerald-600 hover:text-emerald-700 text-sm">
                          Edit
                        </button>
                      </div>
                      <h4 className="font-medium text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-700">{review.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;