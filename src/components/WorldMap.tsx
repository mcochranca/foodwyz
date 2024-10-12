import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { marked } from 'marked';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

interface Post {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  image_url: string;
}

// Mock data
const mockPosts: Post[] = [
  {
    id: 1,
    title: "Delicious Pasta in Rome",
    description: "Try this amazing pasta dish in the heart of Rome!",
    latitude: 41.9028,
    longitude: 12.4964,
    image_url: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "Sushi in Tokyo",
    description: "The best sushi I've ever had!",
    latitude: 35.6762,
    longitude: 139.6503,
    image_url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8fDA%3D"
  }
];

const WorldMap: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(mockPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <div className="w-full h-[calc(100vh-4rem)] md:w-2/3 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="w-full h-[calc(100vh-4rem)] md:w-2/3 flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full h-[calc(100vh-4rem)] md:w-2/3">
      <MapContainer center={[20, 0]} zoom={3} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {posts.map((post) => (
          <Marker key={post.id} position={[post.latitude, post.longitude]}>
            <Popup>
              <div>
                <h2 className="text-lg font-bold">{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: marked(post.description) }} />
                <img src={post.image_url} alt={post.title} className="w-full h-32 object-cover mt-2" />
                <a href={`/post/${post.id}`} className="text-blue-500 hover:underline">View Full Post</a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;