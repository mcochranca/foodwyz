import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/recipes">Recipe Tracker</Link></li>
        <li><Link to="/map">World Map</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
