import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        return res.json();
      })
      .then((parsed) => {
        setBlogs(parsed);
      });
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div>
          <h2 className={styles.blogtitle}>Latest Blogs</h2>
          {blogs.map((_d, index) => {
            return (
              <>
                <div className={styles.blogitems} key={index}>
                  <h3>
                    <Link href={`/blogPost/${_d.slug}`}>{_d.title}</Link>
                  </h3>
                  <p className={styles.blogPostp}>
                    {_d.content.substr(0, 170)}...
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
