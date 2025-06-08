export interface Trail {
  id: string;
  name: string;
  location: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Expert';
  distance: number;
  elevationGain: number;
  estimatedTime: string;
  rating: number;
  reviewCount: number;
  trailType: 'Hiking' | 'Biking' | 'Running' | 'Walking';
  description: string;
  features: string[];
  images: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  weather?: {
    temperature: number;
    condition: string;
  };
}

export interface Review {
  id: string;
  trailId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  photos?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  favoriteTrails: string[];
  completedTrails: string[];
  reviewCount: number;
}