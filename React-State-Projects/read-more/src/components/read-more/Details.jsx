import React from 'react';
import './Posts.scss'

export default function Details({ post, onClose }) {
  return (
    <>
      {post && (
        <div className="details">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <p>Email: {post.email}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
}

