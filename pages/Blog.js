import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.main}>
        <div>
          <h2 className={styles.blogtitle}>Latest Blogs</h2>
          <div className={styles.blogitems}>
            <h3>How to learn java script </h3>
            <p>
              java script is the programming language used to design logic for
              the web
            </p>
          </div>
          <div className={styles.blogitems}>
            <h3>How to learn java script </h3>
            <p>
              java script is the programming language used to design logic for
              the web
            </p>
          </div>
          <div className={styles.blogitems}>
            <h3>How to learn java script </h3>
            <p>
              java script is the programming language used to design logic for
              the web
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
