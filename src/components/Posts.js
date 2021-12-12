import React, { useState } from "react";
import Remarks from "../pages/Remarks";

const Posts = (props) => {
  const { posts } = props;
  const [data, setData] = useState("hello");
  const ok = document.querySelector(".ok");

  const test = () => {
    ok.innerHTML += "noijonijnbijb";
  };

  return (
    <div className="card-box">
      <p className="ok"></p>
      <div className="box-icon-posts">
        <svg
          onClick={test}
          className="icon-posts"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </div>
      <h2>{posts.title}</h2>
      <p className="description-posts">{posts.description}</p>
      <img src={posts.img} alt={posts.title}></img>
      <Remarks />
    </div>
  );
};

export default Posts;
