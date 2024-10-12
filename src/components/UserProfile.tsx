import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { Settings, ChefHat } from 'lucide-react';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data from the API
    const fetchUser = async () => {
      // This is a placeholder and should be replaced with actual API calls
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  const handlePrivacyChange = (setting: keyof User['privacySettings']) => {
    if (user) {
      setUser({
        ...user,
        privacySettings: {
          ...user.privacySettings,
          [setting]: !user.privacySettings[setting]
        }
      });
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Cooking Tools</h2>
          <div className="flex flex-wrap gap-2">
            {user.cookingTools.map((tool, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
                <ChefHat className="w-4 h-4 inline-block mr-1" />
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Privacy Settings</h2>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={user.privacySettings.shareRecipes}
                onChange={() => handlePrivacyChange('shareRecipes')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Share my recipes publicly</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={user.privacySettings.shareStories}
                onChange={() => handlePrivacyChange('shareStories')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Share my cultural stories</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={user.privacySettings.shareLocation}
                onChange={() => handlePrivacyChange('shareLocation')}
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Share my location on the world map</span>
            </label>
          </div>
        </div>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Settings className="w-5 h-5 mr-2" />
          Update Settings
        </button>
      </div>
    </div>
  );
};

export default UserProfile;