import React from 'react';
import WorldMap from './components/WorldMap';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Food Sharing App</h1>
      </header>
      <main className="flex-grow flex flex-col md:flex-row">
        <WorldMap />
        <CreatePost />
      </main>
    </div>
  );
}

export default App;