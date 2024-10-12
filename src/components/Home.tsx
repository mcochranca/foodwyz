import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types';

interface HomeProps {
  recipes: Recipe[];
}

const Home: React.FC<HomeProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
              <p className="text-gray-600 mb-2">{recipe.cuisine}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{recipe.difficulty}</span>
                <span className="text-sm text-gray-500">{recipe.location.name}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;