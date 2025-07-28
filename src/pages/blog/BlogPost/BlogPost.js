import React, { useEffect, useRef } from "react";
import "./blogpost.css";
import {
  FaComment,
  FaCommentDollar,
  FaMessage,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa6";
import { addLike } from "../../../services/blogDataService";

const BlogPost = ({ id, title, bodyText, numberOfLikes, addLikeFunction }) => {
  const likeRef = useRef(null);

  useEffect(() => {
    likeRef.current.addEventListener("click", addLikeToPost);
  });

  const addLikeToPost = () => addLike(id);

  return (
    <section className="landing-body">
      <section className="blog-card">
        <h2>{title}</h2>
        <section className="blog-post-body-text">{bodyText}</section>
        <section className="engagement-section">
          <FaThumbsUp className="reaction-button" ref={likeRef} />
          {numberOfLikes}
          <FaThumbsDown className="reaction-button" />
          <FaComment className="comment-button" />
        </section>
      </section>
    </section>
  );
};

export default BlogPost;
