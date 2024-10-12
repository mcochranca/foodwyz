import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Recipe } from '../types';
import ReactMarkdown from 'react-markdown';
import { MapPin, Clock, ChefHat } from 'lucide-react';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    // Fetch recipe details from the API
    const fetchRecipe = async () => {
      // This is a placeholder and should be replaced with actual API calls
      const response = await fetch(`/api/recipes/${id}`);
      const data = await response.json();
      setRecipe(data);
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <span>{recipe.location.name}</span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{recipe.cuisine}</span>
          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{recipe.difficulty}</span>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-1" />
            <span>30 mins</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <div className="prose max-w-none mb-6">
          <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
        </div>
        <h2 className="text-xl font-semibold mb-2">Cultural Story</h2>
        <p className="text-gray-700 mb-6">{recipe.culturalStory}</p>
        <h2 className="text-xl font-semibold mb-2">Cooking Tools</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.cookingTools.map((tool, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">
              <ChefHat className="w-4 h-4 inline-block mr-1" />
              {tool}
            </span>
          ))}
        </div>
        <h2 className="text-xl font-semibold mb-2">Dietary Restrictions</h2>
        <div className="flex flex-wrap gap-2">
          {recipe.dietaryRestrictions.map((restriction, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">{restriction}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;