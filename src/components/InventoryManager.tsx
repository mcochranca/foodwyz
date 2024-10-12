import React, { useState } from 'react';
import { ShoppingBasket, Plus, X } from 'lucide-react';

interface InventoryManagerProps {
  ingredients: string[];
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

const InventoryManager: React.FC<InventoryManagerProps> = ({ ingredients, setIngredients }) => {
  const [newIngredient, setNewIngredient] = useState('');

  const addIngredient = () => {
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients([...ingredients, newIngredient]);
      setNewIngredient('');
    }
  };

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(ing => ing !== ingredient));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <ShoppingBasket className="mr-2" /> Your Ingredients
      </h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add ingredient..."
        />
        <button
          onClick={addIngredient}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          <Plus size={20} />
        </button>
      </div>
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
            {ingredient}
            <button
              onClick={() => removeIngredient(ingredient)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <X size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManager;