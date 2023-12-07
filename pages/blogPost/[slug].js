// import React, { useState } from "react";
// import styles from "../../styles/Blog.module.css";

// const Slug = (props) => {
//   const [blog, setBlog] = useState(props.myBlog);

//   return (
//     <>
//       <h1 className={styles.main}>{blog.title}</h1>
//       <hr />
//       <p>{blog.content}</p>
//     </>
//   );
// };

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   let data = fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let myBlog = await (await data).json();
//   return {
//     props: { myBlog },
//   };
// }

// export default Slug;

import React, { useState } from "react";
import styles from "../../styles/Blog.module.css";
import * as fs from "fs";

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  function createMarkup(c) {
    return { __html: c };
  }

  return (
    <>
      <h1 className={styles.main}>{blog && blog.title}</h1>
      <hr />
      {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-nodejs" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}

export default Slug;
