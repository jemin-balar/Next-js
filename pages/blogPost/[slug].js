import React, { useState } from "react";
import styles from "../../styles/Blog.module.css";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <>
      <h1 className={styles.main}>{blog.title}</h1>
      <hr />
      <p>{blog.content}</p>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await (await data).json();
  return {
    props: { myBlog },
  };
}

export default Slug;
