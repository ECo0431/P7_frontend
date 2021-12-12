import React from "react";

const Posts = (props) => {
  const { posts } = props;
  return (
    <div className="card-box">
      <div className="box-icon-posts">
        <svg
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
    </div>
  );
};

export default Posts;
