import BlogPost from "./BlogPost/BlogPost";
import { getBlogPosts } from "../../services/blogDataService";
import { useEffect, useState } from "react";

export default function BlogView() {
  let [servicePosts, setData] = useState([]);

  useEffect(() => {
    async function retrieveBlogPosts() {
      try {
        const result = await getBlogPosts();
        setData(result ?? []);
      } catch (error) {
        console.log(error);
        setData([]);
      }
    }
    retrieveBlogPosts();
  }, []);

  const blogPosts = [
    {
      id: 0,
      title: "First Blog Post",
      bodyText: "This is body text for the top blog post on the page",
    },
    {
      id: 1,
      title: "Second Blog Post",
      bodyText:
        "This is body text for the bottom blog post on the page. It is meant to span multiple lines and test spacing. Next step is to load blog posts from the database using our Web service.",
    },
  ];

  return (
    <section>
      {blogPosts.map((item, index) => (
        <section key={index}>
          <BlogPost title={item.title} bodyText={item.bodyText} />
        </section>
      ))}
      <section>
        {(servicePosts ?? []).map((item, index) => (
          <section key={index}>
            <BlogPost title={item.title} bodyText={item.bodyText} />
          </section>
        ))}
      </section>
    </section>
  );
}
