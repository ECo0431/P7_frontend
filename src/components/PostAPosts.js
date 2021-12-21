import React, { useState } from "react";
import axios from "axios";

const PostAPosts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailErrror = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: "http://localhost:3000/api/users/2/posts",
      withCredentials: true,
      data: {
        title: title,
        description: description,
      },
    })
      .then((res) => {
        if (res.data.error) {
          console.log("errors");
        } else {
          window.location = "/homeposts";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form action="" onSubmit={handleLogin} id="posts-form">
      <div className="box-posts box-posts-title">
        <label htmlFor="title">Titre</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <br />
      <div className="box-posts box-posts-description">
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <br />
      <div className="box-posts box-posts-btn">
        <input className="btn-posts" type="submit" value="Publier" />
      </div>
    </form>
  );
};

export default PostAPosts;
