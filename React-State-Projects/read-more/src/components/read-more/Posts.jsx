import React, { useEffect, useState } from 'react';
import Details from './Details';
import data from './data.json';
import './Posts.scss';

export default function Posts() {
  // initialize state variables for selected post and list of all posts
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);

  // function to handle clicking a post to view details
  const handleClickedPost = (post) => {
    setSelectedPost(post);
  };

  // function to handle closing the post details
  const handleCloseDetails = () => {
     setSelectedPost(null);
  };
   

  // useEffect hook to fetch and set the list of posts from a JSON file
  useEffect(() => {
    setPosts(data);
  }, []);

  // render component based on whether a post is selected or not
  if (selectedPost) {
    return <Details post={selectedPost} onClose={handleCloseDetails} />;
  } else {
    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        {posts.map((post) => (
          <div key={post.id} className="posts__item">
            <div>{post.title}</div>
            <button onClick={() => handleClickedPost(post)}>Read More</button>
          </div>
        ))}
      </div>
    );
  }
}
