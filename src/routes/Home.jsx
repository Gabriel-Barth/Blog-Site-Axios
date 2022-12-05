import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import blogFetch from "../axios/config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const response = await blogFetch.get(
        "/posts"
      );
      console.log(response);

      const data = response.data;

      setPosts(data);
    } catch (error) {
      console.log("error");
    }

    console.log("test");
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home">
      <h1>Ultimos Posts</h1>
      {posts.length === 0 ? 
        <p>Carregando...</p>
      : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn"> Ler mais</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
