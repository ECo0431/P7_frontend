import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "../components/Posts";
import Header from "./Header";

const HomePosts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/posts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="all-posts">
      <Header />
      <div className="posts-card">
        <a href="/">
          {data.map((posts) => (
            <Posts posts={posts} key={posts.id_posts} />
          ))}
        </a>
      </div>
    </div>
  );
};

export default HomePosts;
