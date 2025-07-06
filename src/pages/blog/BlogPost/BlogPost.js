import React from "react";
import "./blogpost.css";

const BlogPost = ({ id, title, bodyText, numberOfReacts }) => {
  return (
    <section>
      <section className="blog-card">
        <p>Post Title</p>
        <section>Body Text</section>
      </section>
    </section>
  );
};

export default BlogPost;
