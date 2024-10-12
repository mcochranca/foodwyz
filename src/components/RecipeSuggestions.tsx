import React from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
}

interface RecipeSuggestionsProps {
  recipes: Recipe[];
}

const RecipeSuggestions: React.FC<RecipeSuggestionsProps> = ({ recipes }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <ChefHat className="mr-2" /> Suggested Recipes
      </h2>
      {recipes.length === 0 ? (
        <p className="text-gray-500">Add ingredients to see recipe suggestions!</p>
      ) : (
        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="border-b pb-4 last:border-b-0">
              <h3 className="font-medium text-lg">{recipe.name}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Ingredients: {recipe.ingredients.join(', ')}
              </p>
              <button className="mt-2 text-blue-500 hover:text-blue-700 flex items-center">
                View Recipe <ArrowRight size={16} className="ml-1" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeSuggestions;