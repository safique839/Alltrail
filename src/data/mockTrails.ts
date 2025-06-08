import { Trail, Review } from '../types/trail';

export const mockTrails: Trail[] = [
  {
    id: '1',
    name: 'Angel\'s Landing Trail',
    location: 'Zion National Park, Utah',
    difficulty: 'Hard',
    distance: 5.4,
    elevationGain: 1488,
    estimatedTime: '4-6 hours',
    rating: 4.8,
    reviewCount: 2847,
    trailType: 'Hiking',
    description: 'One of the most famous and thrilling hikes in Zion National Park. This challenging trail features steep switchbacks, narrow ridges, and chains to help you navigate the final ascent.',
    features: ['Scenic Views', 'Rock Scrambling', 'Chains', 'Canyon Views'],
    images: [
      'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    coordinates: { lat: 37.2692, lng: -112.9481 }
  },
  {
    id: '2',
    name: 'Half Dome via Mist Trail',
    location: 'Yosemite National Park, California',
    difficulty: 'Expert',
    distance: 16.4,
    elevationGain: 4800,
    estimatedTime: '10-14 hours',
    rating: 4.9,
    reviewCount: 1923,
    trailType: 'Hiking',
    description: 'The ultimate Yosemite challenge! This iconic granite dome offers unparalleled views of the Sierra Nevada. The final ascent requires cables.',
    features: ['Cables', 'Waterfalls', 'Granite Dome', 'Wilderness Permit Required'],
    images: [
      'https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    coordinates: { lat: 37.7459, lng: -119.5332 }
  },
  {
    id: '3',
    name: 'Emerald Lake Trail',
    location: 'Rocky Mountain National Park, Colorado',
    difficulty: 'Easy',
    distance: 3.2,
    elevationGain: 650,
    estimatedTime: '2-3 hours',
    rating: 4.6,
    reviewCount: 1456,
    trailType: 'Hiking',
    description: 'A beautiful family-friendly hike leading to pristine alpine lakes. Perfect for beginners and photographers.',
    features: ['Alpine Lakes', 'Wildlife Viewing', 'Family Friendly', 'Photography'],
    images: [
      'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598073/pexels-photo-1598073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    coordinates: { lat: 40.3428, lng: -105.6836 }
  },
  {
    id: '4',
    name: 'Slickrock Bike Trail',
    location: 'Moab, Utah',
    difficulty: 'Moderate',
    distance: 10.5,
    elevationGain: 480,
    estimatedTime: '2-4 hours',
    rating: 4.7,
    reviewCount: 892,
    trailType: 'Biking',
    description: 'World-famous mountain biking trail over petrified sand dunes. Unique slickrock terrain provides excellent traction.',
    features: ['Slickrock', 'Desert Views', 'Technical Riding', 'Iconic Trail'],
    images: [
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1556710/pexels-photo-1556710.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    coordinates: { lat: 38.5816, lng: -109.5498 }
  },
  {
    id: '5',
    name: 'Central Park Loop',
    location: 'New York City, New York',
    difficulty: 'Easy',
    distance: 6.1,
    elevationGain: 200,
    estimatedTime: '45-90 minutes',
    rating: 4.3,
    reviewCount: 3421,
    trailType: 'Running',
    description: 'The classic urban running route through Manhattan\'s green heart. Perfect for daily training with rolling hills.',
    features: ['Urban Trail', 'Paved Path', 'Historic Landmarks', 'Year-round Access'],
    images: [
      'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2894206/pexels-photo-2894206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    coordinates: { lat: 40.7829, lng: -73.9654 }
  },
  {
    id: '6',
    name: 'Cascade Falls Trail',
    location: 'Olympic National Park, Washington',
    difficulty: 'Moderate',
    distance: 4.8,
    elevationGain: 800,
    estimatedTime: '3-4 hours',
    rating: 4.5,
    reviewCount: 765,
    trailType: 'Hiking',
    description: 'Lush temperate rainforest hike leading to a spectacular 200-foot waterfall. Experience the Pacific Northwest at its finest.',
    features: ['Waterfall', 'Old Growth Forest', 'Rainforest', 'Photography'],
    images: [
      'https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    coordinates: { lat: 47.9021, lng: -123.6044 }
  }
];

export const mockReviews: Review[] = [
  {
    id: '1',
    trailId: '1',
    userName: 'Sarah M.',
    userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    date: '2024-01-15',
    title: 'Absolutely breathtaking!',
    content: 'This trail is challenging but so worth it. The chains section was intimidating at first, but totally manageable. The views from the top are absolutely incredible. Start early to avoid crowds!'
  },
  {
    id: '2',
    trailId: '1',
    userName: 'Mike R.',
    userAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 4,
    date: '2024-01-10',
    title: 'Great hike, be prepared',
    content: 'Definitely bring gloves for the chains section. The trail is well-maintained and the scenery is spectacular. It\'s crowded on weekends, so I\'d recommend going on a weekday if possible.'
  },
  {
    id: '3',
    trailId: '3',
    userName: 'Jennifer L.',
    userAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    date: '2024-01-08',
    title: 'Perfect family hike',
    content: 'Took my kids (8 and 12) on this trail and they loved it. The lakes are beautiful and we saw some wildlife. Not too challenging but still rewarding. Highly recommend!'
  }
];