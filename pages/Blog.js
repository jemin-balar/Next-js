// import React, { useEffect, useState } from "react";
// import styles from "../styles/Blog.module.css";
// import Link from "next/link";

// const Blog = (props) => {
//   console.log(props);
//   const [blogs, setBlogs] = useState(props.allBlogs);

//   return (
//     <>
//       <div className={styles.main}>
//         <div>
//           <h2 className={styles.blogtitle}>Latest Blogs</h2>
//           {blogs.map((_d) => {
//             return (
//               <>
//                 <div className={styles.blogitems} key={_d.content}>
//                   <h3>
//                     <Link href={`/blogPost/${_d.slug}`}>{_d.title}</Link>
//                   </h3>
//                   <p className={styles.blogPostp}>
//                     {_d.content.substr(0, 170)}...
//                   </p>
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export async function getServerSideProps(context) {
//   let data = fetch("http://localhost:3000/api/blogs");
//   let allBlogs = await (await data).json();
//   return {
//     props: { allBlogs }, // will be passed to the page components as props
//   };
// }

// export default Blog;

import React, { useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <>
      <div className={styles.main}>
        <div>
          <h2 className={styles.blogtitle}>Latest Blogs</h2>
          {blogs.map((_d) => {
            return (
              <>
                <div className={styles.blogitems} key={_d.content}>
                  <h3>
                    <Link href={`/blogPost/${_d.slug}`}>{_d.title}</Link>
                  </h3>
                  <p className={styles.blogPostp}>
                    {_d.metadesc.substr(0, 170)}...
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

export async function getStaticProps(context) {
  let data = await fs.promises.readdir(`blogdata`);
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    console.log(myfile);
    allBlogs.push(JSON.parse(myfile));
  }

  return {
    props: { allBlogs }, // will be passed to the page components as props
  };
}

export default Blog;
