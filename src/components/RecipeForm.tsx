import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../types';
import ReactMarkdown from 'react-markdown';
import { MapPin, Upload } from 'lucide-react';

const RecipeForm: React.FC = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Partial<Recipe>>({
    name: '',
    ingredients: [],
    instructions: '',
    image: '',
    location: { lat: 0, lng: 0, name: '' },
    culturalStory: '',
    cuisine: '',
    dietaryRestrictions: [],
    difficulty: 'medium',
    cookingTools: [],
    isPublic: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save the recipe
    console.log('Saving recipe:', recipe);
    navigate('/');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRecipe({ ...recipe, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Add New Recipe</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Recipe Name</label>
        <input
          type="text"
          id="name"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
        <textarea
          id="ingredients"
          value={recipe.ingredients?.join('\n')}
          onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value.split('\n') })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={4}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions (Markdown)</label>
        <textarea
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={6}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Preview</label>
        <div className="mt-1 p-4 border rounded-md bg-gray-50">
          <ReactMarkdown>{recipe.instructions}</ReactMarkdown>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Recipe Image</label>
        <div className="mt-1 flex items-center">
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="sr-only"
          />
          <label
            htmlFor="image"
            className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Upload className="w-5 h-5 inline-block mr-2" />
            Upload Image
          </label>
          {recipe.image && (
            <img src={recipe.image} alt="Recipe preview" className="ml-4 h-20 w-20 object-cover rounded-md" />
          )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            <MapPin className="h-5 w-5" />
          </span>
          <input
            type="text"
            id="location"
            value={recipe.location?.name}
            onChange={(e) => setRecipe({ ...recipe, location: { ...recipe.location, name: e.target.value } })}
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
            placeholder="Enter location"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="culturalStory" className="block text-sm font-medium text-gray-700">Cultural Story</label>
        <textarea
          id="culturalStory"
          value={recipe.culturalStory}
          onChange={(e) => setRecipe({ ...recipe, culturalStory: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows={4}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cuisine" className="block text-sm font-medium text-gray-700">Cuisine</label>
        <input
          type="text"
          id="cuisine"
          value={recipe.cuisine}
          onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700">Dietary Restrictions</label>
        <input
          type="text"
          id="dietaryRestrictions"
          value={recipe.dietaryRestrictions?.join(', ')}
          onChange={(e) => setRecipe({ ...recipe, dietaryRestrictions: e.target.value.split(', ') })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="e.g. vegetarian, gluten-free"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty</label>
        <select
          id="difficulty"
          value={recipe.difficulty}
          onChange={(e) => setRecipe({ ...recipe, difficulty: e.target.value as 'easy' | 'medium' | 'hard' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="cookingTools" className="block text-sm font-medium text-gray-700">Cooking Tools</label>
        <input
          type="text"
          id="cookingTools"
          value={recipe.cookingTools?.join(', ')}
          onChange={(e) => setRecipe({ ...recipe, cookingTools: e.target.value.split(', ') })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="e.g. oven, blender, slow cooker"
        />
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={recipe.isPublic}
            onChange={(e) => setRecipe({ ...recipe, isPublic: e.target.checked })}
            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <span className="ml-2 text-sm text-gray-600">Make this recipe public</span>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Recipe
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;