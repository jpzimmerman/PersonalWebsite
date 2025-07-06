import React from "react";
import "./blogpost.css";
import {
  FaComment,
  FaCommentDollar,
  FaMessage,
  FaThumbsDown,
  FaThumbsUp,
} from "react-icons/fa6";

const BlogPost = ({ id, title, bodyText, numberOfReacts }) => {
  return (
    <section className="landing-body">
      <section className="blog-card">
        <h2>{title}</h2>
        <section className="blog-post-body-text">{bodyText}</section>
        <section className="engagement-section">
          <FaThumbsUp className="reaction-button" />
          <FaThumbsDown className="reaction-button" />
          <FaComment className="comment-button" />
        </section>
      </section>
    </section>
  );
};

export default BlogPost;
