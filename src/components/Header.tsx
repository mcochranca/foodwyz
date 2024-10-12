import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, PlusCircle, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <ChefHat size={24} />
          <h1 className="text-2xl font-bold">CulinaryGlobe</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/add-recipe" className="flex items-center hover:underline">
                <PlusCircle size={16} className="mr-1" />
                Add Recipe
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center hover:underline">
                <User size={16} className="mr-1" />
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;