import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-emerald-400 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="text-xl font-bold">TrailQuest</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover amazing outdoor adventures with our comprehensive trail database. 
              From easy family walks to challenging mountain peaks, find your next adventure.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Available Nationwide</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/trails" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Browse Trails
                </Link>
              </li>
              <li>
                <Link to="/trails?type=hiking" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Hiking Trails
                </Link>
              </li>
              <li>
                <Link to="/trails?type=biking" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Biking Trails
                </Link>
              </li>
              <li>
                <Link to="/trails?type=running" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Running Trails
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Trail Conditions
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">support@trailquest.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TrailQuest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;