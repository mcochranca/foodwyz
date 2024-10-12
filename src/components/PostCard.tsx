import React from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  latitude: number;
  longitude: number;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <img src={post.imageUrl} alt="Food post" />
      <p>Location: {post.latitude}, {post.longitude}</p>
      <div>
        <button>Like</button>
        <button>Comment</button>
      </div>
    </div>
  );
};

export default PostCard;