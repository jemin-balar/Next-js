import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";

const Slug = () => {
  const [blog, setBlog] = useState([[]]);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((res) => {
        return res.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
  }, [router.isReady]);

  return (
    <>
      <h1 className={styles.main}>{blog.title}</h1>
      <hr />
      <p>{blog.content}</p>
    </>
  );
};

export default Slug;
