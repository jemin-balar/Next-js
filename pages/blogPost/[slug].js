import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";

const Slug = () => {
  const router = useRouter();
  const { Slug } = router.query;
  return (
    <>
      <h1 className={styles.main}>Title of the page {Slug}</h1>
      <hr />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis et
        officiis dicta nostrum quos, laborum numquam! Eius nostrum cupiditate
        corporis.
      </p>
    </>
  );
};

export default Slug;
