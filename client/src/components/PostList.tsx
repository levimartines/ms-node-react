import React, { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../models/Post";

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get<Post[]>('http://localhost:4000/posts');
      setPosts(response.data);
    }

    fetchPosts();
  }, []);

  return <div className="d-flex flex-row flex-wrap justify-content-between">
    {posts.map(post => {
      return <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
      </div>
    })}
  </div>
};

export default PostList;